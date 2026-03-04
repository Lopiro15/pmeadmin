<?php

namespace App\Controller\Parametrage;

use App\Entity\User;
use App\Event\UserRegisterEvent;
use App\Form\Parametrage\SuperAdminUserType;
use App\Form\Parametrage\User\SuperAdminUserEditType;
use App\Repository\UserRepository;
use App\Service\AchatService;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[IsGranted("ROLE_USER")]
#[Route('/parametrage/collaborateur', name: 'app_parametrage_collaborateur_')]
class UserController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface      $manager,
        private UserPasswordHasherInterface $hasher,
    )
    {
    }

    #[Route('/', name: 'index')]
    public function index(
        UserRepository     $userRepository
    ): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $criteria = Criteria::create()
            ->andWhere(Criteria::expr()->eq("deleted", false))
            ->andWhere(Criteria::expr()->neq("id", $user->getId()))
            ->andWhere(Criteria::expr()->neq("email", "lopezkouakou15@gmail.com"))
        ;
        $users = $userRepository->matching($criteria)->toArray();
        return $this->render('parametrage/user/index.html.twig', compact('users'));
    }

    #[Route('/new', name: 'new')]
    public function new(
        Request                  $request,
        AchatService             $service,
        EventDispatcherInterface $evt
    ): Response
    {
        $user = new User();
        $form = $this->createForm(SuperAdminUserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $password = $service->genererMotDePasse();
            $passwordHashed = $this->hasher->hashPassword($user, $password);
            $user->setPassword($passwordHashed);
            $this->manager->persist($user);
            $this->manager->flush();
            try {
                $userEvent = new UserRegisterEvent($user, $password);
                $evt->dispatch($userEvent, UserRegisterEvent::REGISTRATION);
            } catch (\Exception $e) {
                $this->addFlash("error", "Erreur d'envoi le mot de passe généré est: $password");
                return $this->redirectToRoute('app_parametrage_collaborateur_show', ['id' => $user->getId()]);
            }
            $this->addFlash('success', 'Collaborateur ajouté avec succès');
            return $this->redirectToRoute('app_parametrage_collaborateur_index');
        }
        return $this->render('parametrage/user/new.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/{id}/edit', name: 'edit')]
    public function edit(
        Request                  $request,
        User                     $user,
        AchatService             $service,
        EventDispatcherInterface $evt
    ): Response
    {
        $form = $this->createForm(SuperAdminUserEditType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->manager->flush();
            try {
                $userEvent = new UserRegisterEvent($user, $user->getPassword());
                $evt->dispatch($userEvent, UserRegisterEvent::UPDATE);
            } catch (\Exception $e) {
                $this->addFlash("error", "Erreur d'envoi");
                return $this->redirectToRoute('app_parametrage_collaborateur_show', ['id' => $user->getId()]);
            }
            $this->addFlash('success', 'Collaborateur modifié avec succès');
            return $this->redirectToRoute('app_parametrage_collaborateur_show', ['id' => $user->getId()]);
        }
        return $this->render('parametrage/user/edit.html.twig', [
            'form' => $form->createView(),
            'editing' => true
        ]);
    }

    #[Route('/{id}/show', name: 'show', methods: ['GET', 'POST'])]
    public function show(
        User    $user,
        Request $request,
    ): Response
    {
        if ($request->isMethod('POST') &&
            $this->isCsrfTokenValid('validate-user', $request->request->get('token'))) {
            $enable = $request->request->get('enable');
            $delete = $request->request->get('delete');
            if ($enable) {
                $user->setEnable(!$user->isEnable());
                $message = $user->isEnable() ? "Activé" : "Désactivé";
                $this->manager->flush();
                $this->addFlash("success", "Collaborateur $message avec succès");
                return $this->redirectToRoute("app_parametrage_collaborateur_show", ['id' => $user->getId()]);
            }

            if ($delete) {
                $user->setDeleted(true);
                $this->manager->flush();
                $this->addFlash("success", "Collaborateur Supprimé avec succès");
                return $this->redirectToRoute("app_parametrage_collaborateur_index");
            }

        }
        return $this->render('parametrage/user/show.html.twig', compact('user'));
    }

}
