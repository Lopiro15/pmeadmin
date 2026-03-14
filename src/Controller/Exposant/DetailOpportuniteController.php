<?php

namespace App\Controller\Exposant;

use App\Entity\DetailOpportuniteExposant;
use App\Form\Exposant\DetailOpportuniteExposantType;
use App\Repository\DetailOpportuniteExposantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/exposant/detail_opportunite', name: 'app_exposant_detail_opportunite_')]
#[IsGranted("ROLE_USER")]
class DetailOpportuniteController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(DetailOpportuniteExposantRepository $repository): Response
    {
        return $this->render('exposant/detail_opportunite/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new DetailOpportuniteExposant();
        $form = $this->createForm(DetailOpportuniteExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "opportunité créée avec succès");
            return $this->redirectToRoute('app_exposant_detail_opportunite_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/detail_opportunite/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(DetailOpportuniteExposant $article): Response
    {
        return $this->render('exposant/detail_opportunite/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, DetailOpportuniteExposant $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(DetailOpportuniteExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Opportunité modifiée avec succès");
            return $this->redirectToRoute('app_exposant_detail_opportunite_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/detail_opportunite/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, DetailOpportuniteExposant $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Opportunité supprimée avec succès");
        return $this->redirectToRoute('app_exposant_detail_opportunite_index', [], Response::HTTP_SEE_OTHER);
    }
}
