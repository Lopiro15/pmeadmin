<?php

namespace App\Form\Exposant;

use App\Entity\PackExposant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PackExposantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('label')
            ->add('svg', null, [
                'required' => false,
            ])
            ->add('montant')
            ->add("surface", null, [
                'mapped' => false,
            ])
            ->add("amenagement", null, [
                'mapped' => false,
            ])
            ->add("equipement", null, [
                'mapped' => false,
            ])
            ->add("service", null, [
                'mapped' => false,
            ])
            ->add("visibilite", null, [
                'mapped' => false,
            ])
            ->add("bonus", null, [
                'mapped' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PackExposant::class,
        ]);
    }
}
