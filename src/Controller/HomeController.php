<?php

namespace App\Controller;

use App\Entity\Dossier;
use App\Entity\Reservation;
use App\Repository\CandidatureRepository;
use App\Repository\DossierRepository;
use App\Repository\ExposantRepository;
use App\Repository\ReservationRepository;
use MailchimpMarketing\ApiClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted("ROLE_USER")]
class HomeController extends AbstractController
{
    #[Route('/dashboard', name: 'app_home')]
    public function index(
        CandidatureRepository $candidatureRepository,
        DossierRepository     $dossierRepository,
        ExposantRepository    $exposantRepository,
        ReservationRepository $reservationRepository
    ): Response
    {

        $dossiers = $dossierRepository->findAll();
        $reservations = $reservationRepository->findAll();

        $candidature = count($candidatureRepository->findAll());
        $dossier = count($dossiers);
        $exposant = count($exposantRepository->findAll());
        $reservation = count($reservations);

        $sumDossier = 0;
        /** @var Dossier $d */
        foreach ($dossiers as $d) {
            $sumDossier += $d->getPackage()->getTarif();
        }

        $sumReserv = 0;
        /** @var Reservation $r */
        foreach ($reservations as $r) {
            $sumReserv += $r->getTypeTicket()->getTarif();
        }

        return $this->render('emptypage/index.html.twig', compact(
            'candidature',
            'dossier',
            'exposant',
            'reservation',
            'sumDossier',
            'sumReserv'
        ));
    }
}
