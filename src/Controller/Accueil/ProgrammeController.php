<?php

namespace App\Controller\Accueil;

use App\Entity\ProgrammeAcceuil;
use App\Form\Acceuil\ProgrammeAcceuilType;
use App\Repository\ProgrammeAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/programme', name: 'app_accueil_programme_')]
#[IsGranted("ROLE_USER")]
class ProgrammeController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(ProgrammeAcceuilRepository $repository): Response
    {
        return $this->render('accueil/programme/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new ProgrammeAcceuil();
        $form = $this->createForm(ProgrammeAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section programme créée avec succès");
            return $this->redirectToRoute('app_accueil_programme_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/programme/new.html.twig', [
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
    public function edit(Request $request, ProgrammeAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProgrammeAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section programme modifiée avec succès");
            return $this->redirectToRoute('app_accueil_programme_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/programme/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, ProgrammeAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section programme supprimé avec succès");
        return $this->redirectToRoute('app_accueil_programme_index', [], Response::HTTP_SEE_OTHER);
    }
}
