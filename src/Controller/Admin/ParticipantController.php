<?php

namespace App\Controller\Admin;

use App\Repository\ParticipantRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ParticipantController extends AbstractController
{
    #[Route('/admin/participant', name: 'app_admin_participant')]
    public function index(
        ParticipantRepository $participantRepository
    ): Response
    {
        $participants = $participantRepository->findBy([], ["id" => "DESC"]);
        return $this->render('admin/participant/index.html.twig', [
            'participants' => $participants,
        ]);
    }
}
