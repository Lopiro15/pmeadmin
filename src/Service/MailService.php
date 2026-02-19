<?php

namespace App\Service;

use App\Entity\Message;
use App\Entity\Suggestion;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class MailService
{
    public function __construct(private MailerInterface $mailer)
    {
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendContactEmail(Message $message): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($_ENV["DESTINATAIRE_MAIL"])
            ->subject("Contact")
            ->htmlTemplate('emails/message.html.twig')
            ->context([
                "message" => $message,
            ]);

        $this->mailer->send($email);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendSuggestionEmail(Suggestion $suggestion): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($_ENV["DESTINATAIRE_SUGGESTION_MAIL"])
            ->subject("Suggestion")
            ->htmlTemplate('emails/suggestion.html.twig')
            ->context([
                "suggestion" => $suggestion,
            ]);

        $this->mailer->send($email);
    }
    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendReplyEmail(string $to, string $subject, string $message): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($to)
            ->subject($subject)
            ->htmlTemplate('emails/reply.html.twig')
            ->context([
                "message" => $message,
            ]);

        $this->mailer->send($email);
    }
}