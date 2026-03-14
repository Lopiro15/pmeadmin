<?php

namespace App\Controller\Contact;

use App\Repository\MessageRepository;
use App\Service\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/contact/message', name: 'app_contact_message_')]
#[IsGranted("ROLE_USER")]
class MessageController extends AbstractController
{
    public function __construct(
        private MessageRepository      $messageRepository,
        private EntityManagerInterface $manager,
        private MailService            $service
    )
    {
    }

    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('contact/message/index.html.twig', [
            'controller_name' => 'MessageController',
        ]);
    }

    #[Route('/delete', name: 'delete', methods: ['POST'])]
    public function deleteNotice(Request $request): JsonResponse
    {
        // Décoder le contenu JSON de la requête
        $data = json_decode($request->getContent(), true);

        // Vérifier si le tableau existe dans les données
        if (isset($data['items'])) {
            if (is_array($data['items'])) {
                // Traitement du tableau
                $items = $data['items'];
                foreach ($items as $item) {
                    $notice = $this->messageRepository->find($item);
                    $this->manager->remove($notice);
                }
            } else {
                $item = $data['items'];
                $notice = $this->messageRepository->find($item);
                $this->manager->remove($notice);
            }
            $this->manager->flush();

            // Par exemple, faire quelque chose avec le tableau
            // Ici, nous allons juste retourner les items reçus
            return new JsonResponse([
                'status' => 'success'
            ], 200);
        }
        // Si les données ne sont pas valides
        return new JsonResponse([
            'status' => 'error',
            'message' => 'Invalid data format.',
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    #[Route('/reply', name: 'reply', methods: ['POST'])]
    public function replyMessage(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $to = $data['to'];
        $subject = $data['subject'];
        $msg = $data['message'];
        if (!$to || !$subject || !$msg) {
            return new JsonResponse(["message" => "Parameters to, subject and message are required"], Response::HTTP_BAD_REQUEST);
        }
        $this->service->sendReplyEmail($to, $subject, $msg);
        return new JsonResponse(["message" => "reply sent"], Response::HTTP_OK);
    }
}
