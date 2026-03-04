<?php

namespace App\Controller\Accueil;

use App\Entity\MissionAceuil;
use App\Form\Acceuil\MissionAcceuilType;
use App\Repository\MissionAceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/mission/en-tete', name: 'app_accueil_mission_')]
#[IsGranted("ROLE_USER")]
class MissionController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(MissionAceuilRepository $repository): Response
    {
        return $this->render('accueil/mission/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new MissionAceuil();
        $form = $this->createForm(MissionAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section mission créée avec succès");
            return $this->redirectToRoute('app_accueil_mission_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/mission/new.html.twig', [
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
    public function edit(Request $request, MissionAceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(MissionAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section mission modifiée avec succès");
            return $this->redirectToRoute('app_accueil_mission_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/mission/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, MissionAceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section mission supprimé avec succès");
        return $this->redirectToRoute('app_accueil_mission_index', [], Response::HTTP_SEE_OTHER);
    }
}
