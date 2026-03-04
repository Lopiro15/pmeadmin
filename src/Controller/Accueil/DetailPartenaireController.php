<?php

namespace App\Controller\Accueil;

use App\Entity\DetailPartenaireAcceuil;
use App\Form\Acceuil\DetailPartenaireAcceuilType;
use App\Repository\DetailPartenaireAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/detail/partenaire', name: 'app_accueil_detail_partenaire_')]
#[IsGranted("ROLE_USER")]
class DetailPartenaireController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(DetailPartenaireAcceuilRepository $repository): Response
    {
        return $this->render('accueil/detail_partenaire/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new DetailPartenaireAcceuil();
        $form = $this->createForm(DetailPartenaireAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "logo créé avec succès");
            return $this->redirectToRoute('app_accueil_detail_partenaire_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/detail_partenaire/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(DetailPartenaireAcceuil $article): Response
    {
        return $this->render('accueil/detail_partenaire/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, DetailPartenaireAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(DetailPartenaireAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "logo modifié avec succès");
            return $this->redirectToRoute('app_accueil_detail_partenaire_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/detail_partenaire/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, DetailPartenaireAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "logo supprimé avec succès");
        return $this->redirectToRoute('app_accueil_detail_partenaire_index', [], Response::HTTP_SEE_OTHER);
    }
}
