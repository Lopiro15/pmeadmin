<?php

namespace App\Controller\Gala;

use App\Entity\RetroGala;
use App\Form\Gala\RetroGalaType;
use App\Repository\RetroGalaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/gala/retrospective', name: 'app_gala_retrospective_')]
class RetrospectiveController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(RetroGalaRepository $repository): Response
    {
        return $this->render('gala/retrospective/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new RetroGala();
        $form = $this->createForm(RetroGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section rétrospective créée avec succès");
            return $this->redirectToRoute('app_gala_retrospective_index');
        }

        return $this->render('gala/retrospective/new.html.twig', [
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
    public function edit(Request $request, RetroGala $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(RetroGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section rétrospective modifiée avec succès");
            return $this->redirectToRoute('app_gala_retrospective_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/retrospective/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, RetroGala $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section rétrospective supprimé avec succès");
        return $this->redirectToRoute('app_gala_retrospective_index', [], Response::HTTP_SEE_OTHER);
    }
}
