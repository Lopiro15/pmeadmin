<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Exception\LogicException;

class AchatService
{

    function genererMotDePasse()
    {
        // Définition des caractères possibles pour le mot de passe
        $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';

        // Initialisation du mot de passe
        $motDePasse = '';

        // Boucle pour générer chaque caractère du mot de passe
        for ($i = 0; $i < 12; $i++) {
            // Sélection aléatoire d'un caractère parmi ceux disponibles
            $caractereAleatoire = $caracteres[rand(0, strlen($caracteres) - 1)];

            // Ajout du caractère au mot de passe
            $motDePasse .= $caractereAleatoire;
        }

        return $motDePasse;
    }

}