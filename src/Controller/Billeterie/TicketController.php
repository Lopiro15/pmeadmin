<?php

namespace App\Controller\Billeterie;

use App\Entity\TypeTicket;
use App\Form\Ticket\TypeTicketType;
use App\Repository\TypeTicketRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/billeterie/ticket', name: 'app_billeterie_ticket_')]
class TicketController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(TypeTicketRepository $repository): Response
    {
        return $this->render('billeterie/ticket/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new TypeTicket();
        $form = $this->createForm(TypeTicketType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $avantageData = $form->get('avantages')->getData();

//            dd($avantageData);

            $avantage = [];

            foreach ($avantageData as $avg) {
                $avantage[] = $avg["label"];
            }


            $article->setAvantage($avantage);

            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Pack crée avec succès");
            return $this->redirectToRoute('app_billeterie_ticket_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('billeterie/ticket/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(TypeTicket $article): Response
    {
        return $this->render('billeterie/ticket/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, TypeTicket $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TypeTicketType::class, $article);

        $existingData = $article->getAvantage() ?? []; // Supposons que vous ayez une méthode getData()

        $data = [];

        foreach ($existingData as $eD) {
            $data[] = ["label" => $eD];
        }

        $form->get('avantages')->setData($data);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Pack modifiée avec succès");
            return $this->redirectToRoute('app_billeterie_ticket_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('billeterie/ticket/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, TypeTicket $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Pack supprimé avec succès");
        return $this->redirectToRoute('app_billeterie_ticket_index', [], Response::HTTP_SEE_OTHER);
    }
}
