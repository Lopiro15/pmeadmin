<?php

namespace App\EventSubscriber;

use App\Event\UserRegisterEvent;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;

class UserRegisterSubscriber implements EventSubscriberInterface
{
//    private $adresse = null;

    private Address $adresse;

    public function __construct(private MailerInterface $mailer)
    {
        $this->adresse = new Address($_ENV["MAILER_FROM"], name: $_ENV["MAILER_NAME"]);
    }

    public static function getSubscribedEvents()
    {
        return [
            UserRegisterEvent::RECOVER_PASSWORD => 'onRecoverPassword',
            UserRegisterEvent::REGISTRATION => 'onRegister',
            UserRegisterEvent::UPDATE => 'onUpdate',
        ];
    }

    public function onRecoverPassword(UserRegisterEvent $event): void
    {
        $user = $event->getUser();
        $plainPassword = $event->getPlainPassword();
        $email = (new TemplatedEmail())
            ->from($this->adresse)
            ->to($user->getEmail())
            ->subject('Réinitialisation de Mot de passe')
            ->htmlTemplate('emails/forget_password.html.twig')
            ->context([
                'user' => $user,
                'plain_password' => $plainPassword
            ]);
        $this->mailer->send($email);
    }

    public function onRegister(UserRegisterEvent $event): void
    {
        $user = $event->getUser();
        $plainPassword = $event->getPlainPassword();
        $adresse = $this->adresse;
        $email = (new TemplatedEmail())
            ->from($adresse)
            ->to($user->getEmail())
            ->subject("Inscription Kadi Prestige")
            ->htmlTemplate('emails/registration.html.twig')
            ->context([
                'user' => $user,
                'plain_password' => $plainPassword
            ]);
        $this->mailer->send($email);
    }

    public function onUpdate(UserRegisterEvent $event)
    {
        $user = $event->getUser();
        $email = (new TemplatedEmail())
            ->from($this->adresse)
            ->to($user->getEmail())
            ->subject('Modifications de vos informations')
            ->htmlTemplate('emails/update_role.html.twig')
            ->context([
                'user' => $user
            ]);
        $this->mailer->send($email);
    }
}