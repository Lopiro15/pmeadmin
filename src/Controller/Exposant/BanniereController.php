<?php

namespace App\Controller\Exposant;

use App\Entity\BanniereExposant;
use App\Form\Exposant\BanniereExposantType;
use App\Repository\BanniereExposantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/exposant/banniere', name: 'app_exposant_banniere_')]
#[IsGranted("ROLE_USER")]
class BanniereController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(BanniereExposantRepository $repository): Response
    {
        return $this->render('exposant/banniere/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new BanniereExposant();
        $form = $this->createForm(BanniereExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Bannière crée avec succès");
            return $this->redirectToRoute('app_exposant_banniere_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/banniere/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(BanniereExposant $article): Response
    {
        return $this->render('exposant/banniere/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BanniereExposant $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(BanniereExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Bannière modifiée avec succès");
            return $this->redirectToRoute('app_exposant_banniere_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/banniere/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, BanniereExposant $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Bannière supprimé avec succès");
        return $this->redirectToRoute('app_exposant_banniere_index', [], Response::HTTP_SEE_OTHER);
    }
}
