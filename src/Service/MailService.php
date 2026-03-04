<?php

namespace App\Service;

use App\Entity\Candidature;
use App\Entity\Dossier;
use App\Entity\Exposant;
use App\Entity\Message;
use App\Entity\Reservation;
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
    public function sendExposantEmail(Exposant $exposant): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($exposant->getEmail())
            ->subject("Demande d'Exposition")
            ->htmlTemplate('emails/formulaire/Exposant.html.twig')
            ->context([
                "exposant" => $exposant,
            ]);

        $this->mailer->send($email);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendInscriptionEmail(Candidature $candidature): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($candidature->getEmail())
            ->subject("Confirmation de candidature")
            ->htmlTemplate('emails/formulaire/inscription.html.twig')
            ->context([
                "candidature" => $candidature,
            ]);

        $this->mailer->send($email);
    }


    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendPartenaireEmail(Dossier $dossier): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($dossier->getEmail())
            ->subject("Votre proposition de partenariat")
            ->htmlTemplate('emails/formulaire/partenaire.html.twig')
            ->context([
                "dossier" => $dossier,
            ]);

        $this->mailer->send($email);
    }


    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendSponsorEmail(Dossier $dossier): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($dossier->getEmail())
            ->subject("Votre demande de sponsoring")
            ->htmlTemplate('emails/formulaire/sponsor.html.twig')
            ->context([
                "dossier" => $dossier,
            ]);

        $this->mailer->send($email);
    }


    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendTicketEmail(Reservation $reservation): void
    {
        $adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($reservation->getEmail())
            ->subject("Confirmation de reservation")
            ->htmlTemplate('emails/formulaire/ticket.html.twig')
            ->context([
                "reservation" => $reservation,
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