<?php

namespace App\Controller\Admin;

use App\Entity\Candidature;
use App\Repository\CandidatureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


class CandidatureController extends AbstractController
{
    #[Route('/admin/candidature', name: 'app_admin_candidature')]
    public function index(CandidatureRepository $repository): Response
    {
        $candidatures = $repository->findBy([], ["id" => "DESC"]);
        return $this->render('admin/candidature/index.html.twig', compact('candidatures'));
    }

    #[Route('/admin/candidature/{id}/show', name: 'app_admin_candidature_show')]
    public function  show(Candidature $candidature): Response
    {
        return $this->render('admin/candidature/show.html.twig', compact('candidature'));
    }

    #[Route('/admin/candidature/{id}/delete', name: 'app_admin_candidature_delete', methods: ['POST'])]
    public function delete(Request $request, Candidature $article, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$article->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($article);
            $entityManager->flush();
        }
        $this->addFlash("success", "candidature supprimé avec succès");
        return $this->redirectToRoute('app_admin_candidature', [], Response::HTTP_SEE_OTHER);
    }

}
