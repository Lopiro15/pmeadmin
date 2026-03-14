<?php

namespace App\Controller\Exposant;

use App\Entity\PackExposant;
use App\Form\Exposant\PackExposantType;
use App\Repository\PackExposantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/exposant/pack_exposant', name: 'app_exposant_pack_exposant_')]
#[IsGranted("ROLE_USER")]
class PackExposantController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(PackExposantRepository $repository): Response
    {
        return $this->render('exposant/pack_exposant/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new PackExposant();
        $form = $this->createForm(PackExposantType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $surface = $form->get('surface')->getData();
            $amenagement = $form->get('amenagement')->getData();
            $equipement = $form->get('equipement')->getData();
            $service = $form->get('service')->getData();
            $visibilite = $form->get('visibilite')->getData();
            $bonus = $form->get('bonus')->getData();

            $avantage = [
                'surface' => $surface,
                'amenagement' => $amenagement,
                'equipements' => $equipement,
                'services' => $service,
                'visibilite' => $visibilite,
                'bonus' => $bonus
            ];

            $article->setAvantage($avantage);

            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Pack crée avec succès");
            return $this->redirectToRoute('app_exposant_pack_exposant_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/pack_exposant/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(PackExposant $article): Response
    {
        return $this->render('exposant/pack_exposant/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PackExposant $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PackExposantType::class, $article);

        $existingData = $article->getAvantage() ?? []; // Supposons que vous ayez une méthode getData()

        $form->get('surface')->setData($existingData['surface'] ?? null);
        $form->get('amenagement')->setData($existingData['amenagement'] ?? null);
        $form->get('equipement')->setData($existingData['equipements'] ?? null);
        $form->get('service')->setData($existingData['services'] ?? null);
        $form->get('visibilite')->setData($existingData['visibilite'] ?? null);
        $form->get('bonus')->setData($existingData['bonus'] ?? null);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Pack modifiée avec succès");
            return $this->redirectToRoute('app_exposant_pack_exposant_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('exposant/pack_exposant/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, PackExposant $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Pack supprimé avec succès");
        return $this->redirectToRoute('app_exposant_pack_exposant_index', [], Response::HTTP_SEE_OTHER);
    }
}
