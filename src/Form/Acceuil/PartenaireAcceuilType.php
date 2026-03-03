<?php

namespace App\Form\Acceuil;

use App\Entity\PartenaireAcceuil;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PartenaireAcceuilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('miniBadge')
            ->add('titreBlanc')
            ->add('titreGris')
            ->add('cardSvg')
            ->add('cardTitre')
            ->add('cardDescription')
            ->add('cardButtonLabel')
            ->add('cardButtonLink')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PartenaireAcceuil::class,
        ]);
    }
}
