<?php

namespace App\Controller\Parametrage;

use App\Entity\User;
use App\Form\Parametrage\User\MyAccountChangePasswordType;
use App\Form\Parametrage\User\MyAccountEditType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/parametrage/myaccount', name: 'app_parametrage_myaccount_')]
class MyAccountController extends AbstractController
{

    public function __construct(
        private EntityManagerInterface      $manager,
        private UserPasswordHasherInterface $hasher,
    )
    {
    }

    #[Route('/profil', name: 'profil')]
    public function edit(
        Request                  $request,
    ): Response
    {
        /** @var User  $user */
        $user  = $this->getUser();
        $form = $this->createForm(MyAccountEditType::class, $user);
        $form2 = $this->createForm(MyAccountChangePasswordType::class, $user);
        $form->handleRequest($request);
        $form2->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->manager->flush();
            $this->addFlash('success', 'Informations modifié avec succès');
            return $this->redirectToRoute('app_parametrage_myaccount_profil');
        }

        if ($form2->isSubmitted() && $form2->isValid()) {
            $passwordHashed = $this->hasher->hashPassword($user, $user->getPlainPassword());
            $user->setPassword($passwordHashed);
            $user->setPlainPassword(null);
            $this->manager->flush();
            $this->addFlash('success', 'Mot de passe modifié avec succès');
            return $this->redirectToRoute('app_logout');
        }

        return $this->render('parametrage/my_account/edit.html.twig', [
            'form' => $form->createView(),
            'form2' => $form2->createView(),
            "agent" => $user,
            'editing' => true
        ]);
    }

}
