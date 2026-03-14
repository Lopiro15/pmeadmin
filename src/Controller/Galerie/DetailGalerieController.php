<?php

namespace App\Controller\Galerie;

use App\Entity\DetailGalerie;
use App\Form\Galerie\DetailGalerieType;
use App\Repository\DetailGalerieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/galerie/detail_galerie', name: 'app_galerie_detail_galerie_')]
#[IsGranted("ROLE_USER")]
class DetailGalerieController extends AbstractController
{
    public function __construct(private entityManagerInterface $manager)
    {
    }

    #[Route('/', name: 'index')]
    public function index(DetailGalerieRepository $pageRepository): Response
    {
        $pages = $pageRepository->findAll();
        return $this->render('galerie/detail_galerie/index.html.twig', [
            'pages' => $pages,
        ]);
    }


    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(
        Request $request
    ): Response
    {
        $page = (new DetailGalerie());
        $form = $this->createForm(DetailGalerieType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $this->manager->persist($page);

            $this->manager->flush();

            $this->addFlash('success', 'Cliché edition ajouté avec succès');
            return $this->redirectToRoute('app_galerie_detail_galerie_show', ['id' => $page->getId()]);
        }
        return $this->render('galerie/detail_galerie/new.html.twig', [
            'form' => $form
        ]);
    }


    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        DetailGalerie   $page
    ): Response
    {
        $form = $this->createForm(DetailGalerieType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
//            $this->manager->persist($page);
//            foreach ($page->getImageBannieres() as $img) {
//                $img->setPage($page);
//                $this->manager->persist($img);
//            }
            $this->manager->flush();
            $this->addFlash('success', 'Cliché edition modifié avec succès');
            return $this->redirectToRoute('app_galerie_detail_galerie_show', [
                'id' => $page->getId()
            ], Response::HTTP_SEE_OTHER);
        }
        return $this->render('galerie/detail_galerie/edit.html.twig', [
            'form' => $form,
            'page' => $page,
            'editing' => true
        ]);
    }


    #[Route('/{id}/show', name: 'show', methods: ['GET', 'POST'])]
    public function show(
        Request $request,
        DetailGalerie   $page
    ): Response
    {
        if ($request->isMethod('POST') &&
            $this->isCsrfTokenValid('delete-page', $request->request->get('token'))) {
            $delete = $request->request->get('delete');
            if ($delete) {
                $this->manager->remove($page);
                $this->manager->flush();
                $this->addFlash('success', 'Cliché supprimé');
                return $this->redirectToRoute('app_galerie_detail_galerie_index');
            }

        }
        return $this->render('galerie/detail_galerie/show.html.twig', [
            'page' => $page
        ]);
    }
}
