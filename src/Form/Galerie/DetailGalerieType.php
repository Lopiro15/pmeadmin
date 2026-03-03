<?php

namespace App\Form\Galerie;

use App\Entity\DetailGalerie;
use App\Form\DetailOrdreMissionType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DetailGalerieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('edition')
            ->add('titre')
            ->add('description')
            ->add('cliches', CollectionType::class, [
                'entry_type' => ClicheGalerieType::class,
                'entry_options' => ['label' => false],
                'prototype' => true,
                'allow_add' => true,
                'allow_delete' => true,
                'error_bubbling' => false,
                "by_reference" => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DetailGalerie::class,
        ]);
    }
}
