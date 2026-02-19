<?php

namespace App\Controller\Admin;

use App\Repository\DossierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DossierController extends AbstractController
{
    #[Route('/admin/dossier', name: 'app_admin_dossier')]
    public function index(DossierRepository $repository): Response
    {
        $dossiers = $repository->findAll();
        return $this->render('admin/dossier/index.html.twig', compact('dossiers'));
    }
}
