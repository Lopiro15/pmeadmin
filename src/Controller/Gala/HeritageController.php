<?php

namespace App\Controller\Gala;

use App\Entity\HeritageGala;
use App\Form\Gala\HeritageGalaType;
use App\Repository\HeritageGalaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/gala/heritage', name: 'app_gala_heritage_')]
#[IsGranted("ROLE_USER")]
class HeritageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(HeritageGalaRepository $repository): Response
    {
        return $this->render('gala/heritage/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new HeritageGala();
        $form = $this->createForm(HeritageGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section Héritage crée avec succès");
            return $this->redirectToRoute('app_gala_heritage_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/heritage/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(HeritageGala $article): Response
    {
        return $this->render('gala/heritage/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, HeritageGala $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(HeritageGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section héritage modifiée avec succès");
            return $this->redirectToRoute('app_gala_heritage_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/heritage/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, HeritageGala $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section héritage supprimée avec succès");
        return $this->redirectToRoute('app_gala_heritage_index', [], Response::HTTP_SEE_OTHER);
    }
}
