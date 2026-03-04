<?php

namespace App\Form\Gala;

use App\Entity\HeritageGala;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Validator\Constraints\File;

class HeritageGalaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('badge')
            ->add('titreBlanc')
            ->add('sousTitre')
            ->add('card1titre')
            ->add('card1descriptiongris')
            ->add('card1descriptionblanc')
            ->add('card1descriptiongris2')
            ->add('card1ImageFile', VichImageType::class, [
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
            ->add('card2Nb')
            ->add('card2Label')
            ->add('card2LabelRouge')
            ->add('card2Description')
            ->add('card3TitreMini')
            ->add('card3Titre')
            ->add('card3Description')
            ->add('card3ImageFondFile', VichImageType::class, [
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
            ->add('card4TitreOr')
            ->add('card4TitreBlanc')
            ->add('card4LabelGris')
            ->add('card4ImageFile', VichImageType::class, [
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
            ->add('card5Nb')
            ->add('card5label')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => HeritageGala::class,
        ]);
    }
}
