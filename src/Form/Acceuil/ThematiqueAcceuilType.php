<?php

namespace App\Form\Acceuil;

use App\Entity\ThematiqueAcceuil;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ThematiqueAcceuilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre1')
            ->add('titre2')
            ->add('description')
            ->add('lienManifeste')
            ->add('nb')
            ->add('nbLabel')
            ->add('annee')
            ->add('file', VichImageType::class, [
                'required' => false,
                'allow_delete' => true,
                'download_uri' => false,
                'image_uri' => false,
                'asset_helper' => true,
                'constraints' => [
                    new File([
                        'mimeTypes' => ['image/jpeg', 'image/png', 'image/gif'],
                        'mimeTypesMessage' => 'fichier non valide (jpeg, png, gif).',
                        'maxSize' => '15M',
                        'maxSizeMessage' => 'Ce fichier est trop volumineux'// Adjust the maximum file size as needed
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ThematiqueAcceuil::class,
        ]);
    }
}
