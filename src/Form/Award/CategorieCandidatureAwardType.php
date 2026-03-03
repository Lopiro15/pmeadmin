<?php

namespace App\Form\Award;

use App\Entity\Candidature;
use App\Entity\CategorieCandidature;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

class CategorieCandidatureAwardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('code')
            ->add('label')
            ->add('miniTitre')
            ->add('description')
            ->add('imageFile', VichImageType::class, [
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
            'data_class' => CategorieCandidature::class,
        ]);
    }
}
