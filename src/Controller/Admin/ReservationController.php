<?php

namespace App\Controller\Admin;

use App\Repository\ReservationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ReservationController extends AbstractController
{
    #[Route('/admin/reservation', name: 'app_admin_reservation')]
    public function index(ReservationRepository $reservationRepository): Response
    {
        $reservations = $reservationRepository->findAll();
        return $this->render('admin/reservation/index.html.twig', compact('reservations'));
    }
}
