<?php

namespace App\Controller\Award;

use App\Entity\CritereAward;
use App\Form\Award\CritereAwardType;
use App\Repository\CritereAwardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/award/critere', name: 'app_award_critere_')]
#[IsGranted("ROLE_USER")]
class CritereController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(CritereAwardRepository $repository): Response
    {
        return $this->render('award/critere/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new CritereAward();
        $form = $this->createForm(CritereAwardType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Critère créé avec succès");
            return $this->redirectToRoute('app_award_critere_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('award/critere/new.html.twig', [
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
    public function edit(Request $request, CritereAward $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CritereAwardType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Critère modifié avec succès");
            return $this->redirectToRoute('app_award_critere_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('award/critere/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, CritereAward $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Critère supprimé avec succès");
        return $this->redirectToRoute('app_award_critere_index', [], Response::HTTP_SEE_OTHER);
    }
}
