<?php

namespace App\Controller\Gala;

use App\Entity\PaysInviteGala;
use App\Form\Gala\PaysInviteGalaType;
use App\Repository\PaysInviteGalaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/gala/pays', name: 'app_gala_pays_invite_')]
class PaysInviteController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(PaysInviteGalaRepository $repository): Response
    {
        return $this->render('gala/pays_invite/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new PaysInviteGala();
        $form = $this->createForm(PaysInviteGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Pays invité créé avec succès");
            return $this->redirectToRoute('app_gala_pays_invite_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/pays_invite/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

//    #[Route('/{id}', name: 'show', methods: ['GET'])]
//    public function show(StatsAcceuil $article): Response
//    {
//        return $this->render('accueil/stats/show.html.twig', [
//            'article' => $article,
//        ]);
//    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PaysInviteGala $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PaysInviteGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Pays invité modifiée avec succès");
            return $this->redirectToRoute('app_gala_pays_invite_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/pays_invite/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, PaysInviteGala $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Pays supprimé avec succès");
        return $this->redirectToRoute('app_gala_pays_invite_index', [], Response::HTTP_SEE_OTHER);
    }
}
