<?php

namespace App\Controller\Api;

use MailchimpMarketing\ApiClient;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class SubscribeNewsLetterController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{
    public function __invoke(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $email = $data['email'];

        if(
            !$email
        ) {
            $response = [
                'code' => 500,
                'message' => 'parameter email is required.'
            ];
            return new JsonResponse($response, Response::HTTP_FORBIDDEN);
        }
        $mailchimp = new ApiClient();
        $mailchimp->setConfig([
            'apiKey' => $_ENV["MAILCHIMP_API_KEY"],
            'server' => $_ENV['MAILCHIMP_SERVER'], // Par exemple, 'us1'

        ]);

        $listId = $_ENV['MAILCHIMP_ID_AUDIENCE'];
        $response = $mailchimp->lists->addListMember($listId, [
            'email_address' => $email,
            'status' => 'pending', // Utilisez 'pending' pour une double confirmation
        ]);
        return new JsonResponse(["message" => "Un mail vous a été envoyer afin de confirmer votre souscription."], Response::HTTP_OK);
    }
}