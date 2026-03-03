<?php

namespace App\Controller\Accueil;

use App\Entity\ThematiqueAcceuil;
use App\Form\Acceuil\ThematiqueAcceuilType;
use App\Repository\ThematiqueAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/thematique', name: 'app_accueil_thematique_')]
#[IsGranted("ROLE_USER")]
class ThematiqueController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ThematiqueAcceuilRepository $repository): Response
    {
        return $this->render('accueil/thematique/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new ThematiqueAcceuil();
        $form = $this->createForm(ThematiqueAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section Thématique crée avec succès");
            return $this->redirectToRoute('app_accueil_thematique_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/thematique/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(ThematiqueAcceuil $article): Response
    {
        return $this->render('accueil/thematique/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ThematiqueAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ThematiqueAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section Thématique modifiée avec succès");
            return $this->redirectToRoute('app_accueil_thematique_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/thematique/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, ThematiqueAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section Thématique supprimé avec succès");
        return $this->redirectToRoute('app_accueil_thematique_index', [], Response::HTTP_SEE_OTHER);
    }
}
