<?php

namespace App\Controller\Gala;

use App\Entity\EntrepriseHallOfFame;
use App\Form\Gala\EntrepriseHallOfFameType;
use App\Repository\EntrepriseHallOfFameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/gala/entreprise', name: 'app_gala_entreprise_')]
#[IsGranted("ROLE_USER")]
class EntrepriseController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(EntrepriseHallOfFameRepository $repository): Response
    {
        return $this->render('gala/entreprise/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new EntrepriseHallOfFame();
        $form = $this->createForm(EntrepriseHallOfFameType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Entreprise créée avec succès");
            return $this->redirectToRoute('app_gala_entreprise_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/entreprise/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(EntrepriseHallOfFame $article): Response
    {
        return $this->render('gala/entreprise/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, EntrepriseHallOfFame $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(EntrepriseHallOfFameType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Entreprise modifiée avec succès");
            return $this->redirectToRoute('app_gala_entreprise_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/entreprise/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, EntrepriseHallOfFame $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Entreprise supprimée avec succès");
        return $this->redirectToRoute('app_gala_entreprise_index', [], Response::HTTP_SEE_OTHER);
    }
}
