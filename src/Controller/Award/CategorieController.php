<?php

namespace App\Controller\Award;

use App\Entity\CategorieCandidature;
use App\Form\Award\CategorieCandidatureAwardType;
use App\Repository\CategorieCandidatureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/award/categorie', name: 'app_award_categorie_')]
#[IsGranted("ROLE_USER")]
class CategorieController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(CategorieCandidatureRepository $repository): Response
    {
        return $this->render('award/categorie/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new CategorieCandidature();
        $form = $this->createForm(CategorieCandidatureAwardType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Catégorie crée avec succès");
            return $this->redirectToRoute('app_award_categorie_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('award/categorie/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(CategorieCandidature $article): Response
    {
        return $this->render('award/categorie/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CategorieCandidature $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CategorieCandidatureAwardType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Catégorie modifiée avec succès");
            return $this->redirectToRoute('app_award_categorie_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('award/categorie/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, CategorieCandidature $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Catégorie supprimé avec succès");
        return $this->redirectToRoute('app_award_categorie_index', [], Response::HTTP_SEE_OTHER);
    }
}
