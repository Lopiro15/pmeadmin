<?php

namespace App\Controller\Admin;

use App\Entity\Candidature;
use App\Repository\CandidatureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CandidatureController extends AbstractController
{
    #[Route('/admin/candidature', name: 'app_admin_candidature')]
    public function index(CandidatureRepository $repository): Response
    {
        $candidatures = $repository->findAll();
        return $this->render('admin/candidature/index.html.twig', compact('candidatures'));
    }

    #[Route('/admin/candidature/{id}/show', name: 'app_admin_candidature_show')]
    public function  show(Candidature $candidature): Response
    {
        return $this->render('admin/candidature/show.html.twig', compact('candidature'));
    }
}
