<?php

namespace App\Controller\Accueil;

use App\Entity\AgendaAcceuil;
use App\Form\Acceuil\AgendaAcceuilType;
use App\Repository\AgendaAcceuilRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/accueil/agenda', name: 'app_accueil_agenda_')]
#[IsGranted("ROLE_USER")]
class AgendaController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(AgendaAcceuilRepository $repository): Response
    {
        return $this->render('accueil/agenda/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new AgendaAcceuil();
        $form = $this->createForm(AgendaAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section agenda créée avec succès");
            return $this->redirectToRoute('app_accueil_agenda_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/agenda/new.html.twig', [
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
    public function edit(Request $request, AgendaAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AgendaAcceuilType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section agenda modifiée avec succès");
            return $this->redirectToRoute('app_accueil_agenda_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('accueil/agenda/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, AgendaAcceuil $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section agenda supprimé avec succès");
        return $this->redirectToRoute('app_accueil_agenda_index', [], Response::HTTP_SEE_OTHER);
    }
}
