<?php

namespace App\Controller\Accueil;

use App\Entity\CarteProgrammeAcceuil;
use App\Form\Acceuil\CarteProgrammeAcceuilType;
use App\Repository\CarteProgrammeAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/card/programme', name: 'app_accueil_card_programme_')]
#[IsGranted("ROLE_USER")]
class CardProgrammeController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(CarteProgrammeAcceuilRepository $repository): Response
    {
        return $this->render('accueil/card_programme/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new CarteProgrammeAcceuil();
        $form = $this->createForm(CarteProgrammeAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "carte créée avec succès");
            return $this->redirectToRoute('app_accueil_card_programme_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/card_programme/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(CarteProgrammeAcceuil $article): Response
    {
        return $this->render('accueil/card_programme/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CarteProgrammeAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CarteProgrammeAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "carte modifiée avec succès");
            return $this->redirectToRoute('app_accueil_card_programme_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/card_programme/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, CarteProgrammeAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Carte supprimée avec succès");
        return $this->redirectToRoute('app_accueil_card_programme_index', [], Response::HTTP_SEE_OTHER);
    }
}
