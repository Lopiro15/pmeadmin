<?php

namespace App\Form\Sponsor;

use App\Entity\PackageDossier;
use App\Form\Galerie\ClicheGalerieType;
use phpDocumentor\Reflection\Types\Collection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PackageDossierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('tarif')
            ->add('code', ChoiceType::class, [
                'choices'  => [
                    'Sponsor' => 'SPONSOR',
                    'Partenaire' => 'PARTENAIRE',
                ],
            ])
            ->add('popu')
            ->add('description')
            ->add('avantages', CollectionType::class, [
                'mapped' => false,
                'entry_type' => AvantagePackType::class,
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
            'data_class' => PackageDossier::class,
        ]);
    }
}
