<?php

namespace App\Controller\Admin;

use App\Repository\ExposantRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ExposantController extends AbstractController
{
    #[Route('/admin/exposant', name: 'app_admin_exposant')]
    public function index(ExposantRepository $repository): Response
    {
        $exposants = $repository->findAll();
        return $this->render('admin/exposant/index.html.twig', compact('exposants'));
    }
}
