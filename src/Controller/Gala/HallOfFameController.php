<?php

namespace App\Controller\Gala;

use App\Entity\HallOfFameGala;
use App\Form\Gala\HallOfFameGalaType;
use App\Repository\HallOfFameGalaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/gala/hall_of_fame', name: 'app_gala_hall_of_fame_')]
class HallOfFameController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(HallOfFameGalaRepository $repository): Response
    {
        return $this->render('gala/hall_of_fame/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new HallOfFameGala();
        $form = $this->createForm(HallOfFameGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($article);
            $entityManager->flush();

            $this->addFlash("success", "Section hall of fame créée avec succès");
            return $this->redirectToRoute('app_gala_hall_of_fame_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/hall_of_fame/new.html.twig', [
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
    public function edit(Request $request, HallOfFameGala $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(HallOfFameGalaType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Section hall of fame modifiée avec succès");
            return $this->redirectToRoute('app_gala_hall_of_fame_index', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('gala/hall_of_fame/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, HallOfFameGala $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Section hall of fame supprimé avec succès");
        return $this->redirectToRoute('app_gala_hall_of_fame_index', [], Response::HTTP_SEE_OTHER);
    }
}
