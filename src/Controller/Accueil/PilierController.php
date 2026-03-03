<?php

namespace App\Controller\Accueil;

use App\Entity\PilierMissionAceuil;
use App\Form\Acceuil\PilierMissionAcceuilType;
use App\Repository\PilierMissionAceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/pilier', name: 'app_accueil_pilier_')]
#[IsGranted("ROLE_USER")]
class PilierController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(PilierMissionAceuilRepository $repository): Response
    {
        return $this->render('accueil/pilier/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new PilierMissionAceuil();
        $form = $this->createForm(PilierMissionAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "pilier crée avec succès");
            return $this->redirectToRoute('app_accueil_pilier_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/pilier/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(PilierMissionAceuil $article): Response
    {
        return $this->render('accueil/pilier/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PilierMissionAceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PilierMissionAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "pilier modifié avec succès");
            return $this->redirectToRoute('app_accueil_pilier_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/pilier/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, PilierMissionAceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Pilier supprimé avec succès");
        return $this->redirectToRoute('app_accueil_pilier_index', [], Response::HTTP_SEE_OTHER);
    }
}
