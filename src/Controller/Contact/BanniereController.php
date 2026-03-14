<?php

namespace App\Controller\Contact;

use App\Entity\BanniereContact;
use App\Form\Contact\BanniereContactType;
use App\Repository\BanniereContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/contact/banniere', name: 'app_contact_banniere_')]
#[IsGranted("ROLE_USER")]
class BanniereController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(BanniereContactRepository $repository): Response
    {
        return $this->render('contact/banniere/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new BanniereContact();
        $form = $this->createForm(BanniereContactType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Bannière crée avec succès");
            return $this->redirectToRoute('app_contact_banniere_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contact/banniere/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(BanniereContact $article): Response
    {
        return $this->render('contact/banniere/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BanniereContact $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(BanniereContactType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Bannière modifiée avec succès");
            return $this->redirectToRoute('app_contact_banniere_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('contact/banniere/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, BanniereContact $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Bannière supprimé avec succès");
        return $this->redirectToRoute('app_contact_banniere_index', [], Response::HTTP_SEE_OTHER);
    }
}
