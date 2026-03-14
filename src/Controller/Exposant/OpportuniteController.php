<?php

namespace App\Controller\Exposant;

use App\Entity\OpportuniteExposant;
use App\Form\Exposant\OpportuniteExposantType;
use App\Repository\OpportuniteExposantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/exposant/opportunite', name: 'app_exposant_opportunite_')]
#[IsGranted("ROLE_USER")]
class OpportuniteController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(OpportuniteExposantRepository $repository): Response
    {
        return $this->render('exposant/opportunite/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new OpportuniteExposant();
        $form = $this->createForm(OpportuniteExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section opportunité créée avec succès");
            return $this->redirectToRoute('app_exposant_opportunite_index');
        }

        return $this->render('exposant/opportunite/new.html.twig', [
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
    public function edit(Request $request, OpportuniteExposant $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(OpportuniteExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section opportunité modifiée avec succès");
            return $this->redirectToRoute('app_exposant_opportunite_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/opportunite/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, OpportuniteExposant $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section opportunité supprimé avec succès");
        return $this->redirectToRoute('app_exposant_opportunite_index', [], Response::HTTP_SEE_OTHER);
    }
}
