<?php

namespace App\Form\Award;

use App\Entity\BanniereAward;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

class BanniereAwardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('badge')
            ->add('titreBlanc')
            ->add('titreRouge')
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
            'data_class' => BanniereAward::class,
        ]);
    }
}
