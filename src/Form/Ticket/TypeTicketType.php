<?php

namespace App\Form\Ticket;

use App\Entity\TypeTicket;
use App\Form\Sponsor\AvantagePackType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeTicketType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('label')
            ->add('svg')
            ->add('tarif')
            ->add('avantages', CollectionType::class, [
                'mapped' => false,
                'entry_type' => AvantageType::class,
                'entry_options' => ['label' => false],
                'prototype' => true,
                'allow_add' => true,
                'allow_delete' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TypeTicket::class,
        ]);
    }
}
