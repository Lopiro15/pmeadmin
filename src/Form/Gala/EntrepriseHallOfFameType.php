<?php

namespace App\Form\Gala;

use App\Entity\EntrepriseHallOfFame;
use App\Entity\HallOfFameGala;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

class EntrepriseHallOfFameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('raisonSocial')
            ->add('facebook')
            ->add('linkedin')
            ->add('siteWeb')
            ->add('badge')
            ->add('imageFile', VichImageType::class, [
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
            'data_class' => EntrepriseHallOfFame::class,
        ]);
    }
}
