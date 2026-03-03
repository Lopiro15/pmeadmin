<?php

namespace App\Form\Acceuil;

use App\Entity\EpicentreAcceuil;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EpicentreAcceuilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titreBlack')
            ->add('titreGris')
            ->add('adresseLongue')
            ->add('lienCarte')
            ->add('descriptionInfoline')
            ->add('telephone')
            ->add('email')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => EpicentreAcceuil::class,
        ]);
    }
}
