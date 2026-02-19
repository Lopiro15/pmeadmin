<?php

namespace App\Event;

use App\Entity\User;
use Symfony\Contracts\EventDispatcher\Event;

class UserRegisterEvent extends Event
{
    public const REGISTRATION = 'user.register';
    public const UPDATE = 'user.update';
    public const RECOVER_PASSWORD = 'user.recover_password';

    public function __construct(private User $user, private string $plainPassword)
    {
    }


    public function getUser(): User
    {
        return $this->user;
    }


    public function getPlainPassword(): string
    {
        return $this->plainPassword;
    }
}