<?php

namespace App\Form\Gala;

use App\Entity\RetroGala;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RetroGalaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('debut')
            ->add('fin')
            ->add('titreBlack')
            ->add('titreGris')
            ->add('nbPmeIncrite')
            ->add('nbParticipant')
            ->add('proportionChef')
            ->add('proportionPublic')
            ->add('proportionCadre')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => RetroGala::class,
        ]);
    }
}
