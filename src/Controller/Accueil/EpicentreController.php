<?php

namespace App\Controller\Accueil;

use App\Entity\EpicentreAcceuil;
use App\Form\Acceuil\EpicentreAcceuilType;
use App\Repository\EpicentreAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/epicentre', name: 'app_accueil_epicentre_')]
#[IsGranted("ROLE_USER")]
class EpicentreController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(EpicentreAcceuilRepository $repository): Response
    {
        return $this->render('accueil/epicentre/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new EpicentreAcceuil();
        $form = $this->createForm(EpicentreAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section épicentre créée avec succès");
            return $this->redirectToRoute('app_accueil_epicentre_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/epicentre/new.html.twig', [
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
    public function edit(Request $request, EpicentreAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(EpicentreAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section épicentre modifiée avec succès");
            return $this->redirectToRoute('app_accueil_epicentre_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/epicentre/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, EpicentreAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section épicentre supprimé avec succès");
        return $this->redirectToRoute('app_accueil_epicentre_index', [], Response::HTTP_SEE_OTHER);
    }
}
