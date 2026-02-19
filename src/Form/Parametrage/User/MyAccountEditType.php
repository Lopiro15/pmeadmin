<?php

namespace App\Form\Parametrage\User;

use App\Entity\User;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\Validator\Constraints\NotBlank;

class MyAccountEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('firstName')
            ->add('email', EmailType::class)
            ->add('lastName')
            ->add('phone')
            ->add('password', PasswordType::class, [
                'mapped' => false,
                'constraints' => [
                    new UserPassword(),
                    new NotBlank()
                ],
                'attr'=>[
                    'placeholder'=>"Entrer votre mot de passe"
                ],
            ])
        ;

//        $builder->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $event) {
//            $form = $event->getForm();
//            /** @var User $data */
//            $data = $event->getData();
//            if($data->getTypeUser()->getCode() == "SUPER_ADMIN") {
//                $form
//                    ->add('email', EmailType::class)
//                ;
//            }
//        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
