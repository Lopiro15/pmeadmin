<?php

namespace App\Form\Sponsor;

use App\Entity\PackageDossier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PackageDossierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('tarif')
            ->add('avantage')
            ->add('code', ChoiceType::class, [
                'choices'  => [
                    'Sponsor' => 'SPONSOR',
                    'Partenaire' => 'PARTENAIRE',
                ],
            ])
            ->add('isPopu')
            ->add('description')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PackageDossier::class,
        ]);
    }
}
