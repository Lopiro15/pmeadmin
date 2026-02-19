<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\Exception\AccountStatusException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{


    public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof User) {
            return;
        }

        if ($user->isDeleted()) {
            throw new CustomUserMessageAccountStatusException('Account has deleted.');
        }

//        if ($user->isEnable()) {
//            throw new CustomUserMessageAccountStatusException('Account has blocked.');
//        }
    }

    public function checkPostAuth(UserInterface $user): void
    {

        if (!$user instanceof User) {
            return;
        }

        if (!$user->isEnable()) {
            throw new CustomUserMessageAccountStatusException('Account has blocked.');
        }
    }
}