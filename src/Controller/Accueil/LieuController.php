<?php

namespace App\Controller\Accueil;

use App\Entity\LieuAcceuil;
use App\Form\Acceuil\LieuAccueilType;
use App\Repository\LieuAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/lieu', name: 'app_accueil_lieu_')]
#[IsGranted("ROLE_USER")]
class LieuController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(LieuAcceuilRepository $repository): Response
    {
        return $this->render('accueil/lieu/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new LieuAcceuil();
        $form = $this->createForm(LieuAccueilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "lieu crée avec succès");
            return $this->redirectToRoute('app_accueil_lieu_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/lieu/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(LieuAcceuil $article): Response
    {
        return $this->render('accueil/lieu/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, LieuAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(LieuAccueilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "lieu modifié avec succès");
            return $this->redirectToRoute('app_accueil_lieu_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/lieu/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, LieuAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "lieu supprimé avec succès");
        return $this->redirectToRoute('app_accueil_lieu_index', [], Response::HTTP_SEE_OTHER);
    }
}
