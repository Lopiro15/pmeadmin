<?php

namespace App\Controller\Accueil;

use App\Entity\DetailAgendaAcceuil;
use App\Form\Acceuil\DetailAgendaAcceuilType;
use App\Repository\DetailAgendaAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/detail/agenda', name: 'app_accueil_detail_agenda_')]
#[IsGranted("ROLE_USER")]
class DetailAgendaController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(DetailAgendaAcceuilRepository $repository): Response
    {
        return $this->render('accueil/detail_agenda/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new DetailAgendaAcceuil();
        $form = $this->createForm(DetailAgendaAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "détail déroulé crée avec succès");
            return $this->redirectToRoute('app_accueil_detail_agenda_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/detail_agenda/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(DetailAgendaAcceuil $article): Response
    {
        return $this->render('accueil/detail_agenda/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, DetailAgendaAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(DetailAgendaAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "détail déroulé modifié avec succès");
            return $this->redirectToRoute('app_accueil_detail_agenda_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/detail_agenda/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, DetailAgendaAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "détail déroulé avec succès");
        return $this->redirectToRoute('app_accueil_detail_agenda_index', [], Response::HTTP_SEE_OTHER);
    }
}
