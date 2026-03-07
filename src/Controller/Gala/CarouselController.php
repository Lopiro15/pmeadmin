<?php

namespace App\Controller\Gala;

use App\Entity\CarouselGala;
use App\Form\Gala\CarouselGalaType;
use App\Repository\CarouselGalaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/gala/carousel', name: 'app_gala_carousel_')]
#[IsGranted("ROLE_USER")]
class CarouselController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(CarouselGalaRepository $repository): Response
    {
        return $this->render('gala/carousel/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new CarouselGala();
        $form = $this->createForm(CarouselGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Bannière crée avec succès");
            return $this->redirectToRoute('app_gala_carousel_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/carousel/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(CarouselGala $article): Response
    {
        return $this->render('gala/carousel/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CarouselGala $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CarouselGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Bannière modifiée avec succès");
            return $this->redirectToRoute('app_gala_carousel_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/carousel/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, CarouselGala $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Bannière supprimé avec succès");
        return $this->redirectToRoute('app_gala_carousel_index', [], Response::HTTP_SEE_OTHER);
    }
}
