<?php

namespace App\Controller\Sponsor;

use App\Entity\PackageDossier;
use App\Form\Sponsor\PackageDossierType;
use App\Repository\PackageDossierRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
#[Route('/sponsor/package', name: 'app_sponsor_package_')]
class PackageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(PackageDossierRepository $repository): Response
    {
        return $this->render('sponsor/package/index.html.twig', [
            'articles' => $repository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $article = new PackageDossier();
        $form = $this->createForm(PackageDossierType::class, $article);
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
            return $this->redirectToRoute('app_sponsor_package_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('sponsor/package/new.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(PackageDossier $article): Response
    {
        return $this->render('sponsor/package/show.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PackageDossier $article, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PackageDossierType::class, $article);

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
            return $this->redirectToRoute('app_sponsor_package_show', ['id' => $article->getId()], Response::HTTP_SEE_OTHER);
        }

        return $this->render('sponsor/package/edit.html.twig', [
            'article' => $article,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['POST'])]
    public function delete(Request $request, PackageDossier $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "Pack supprimé avec succès");
        return $this->redirectToRoute('app_sponsor_package_index', [], Response::HTTP_SEE_OTHER);
    }
}
