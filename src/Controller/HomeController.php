<?php

namespace App\Controller;

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
    ): Response
    {

//        $mailchimp = new ApiClient();
//        $mailchimp->setConfig([
//            'apiKey' => $_ENV["MAILCHIMP_API_KEY"],
//            'server' => $_ENV['MAILCHIMP_SERVER'], // Par exemple, 'us1'
//        ]);
//
//        $listId = $_ENV['MAILCHIMP_ID_AUDIENCE'];
//        $response = $mailchimp->lists->addListMember($listId, [
//            'email_address' => "djoci566@gmail.com",
//            'status' => 'pending', // Utilisez 'pending' pour une double confirmation
//        ]);
//        dd($response);
//        return $this->redirectToRoute('app_admin_page_index');

        return $this->render('emptypage/index.html.twig', [
            'controller_name' => 'EmptypageController',
        ]);
    }
}
