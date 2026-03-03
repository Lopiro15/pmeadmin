<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Dossier;
use App\Service\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

class DossierProcessor implements \ApiPlatform\State\ProcessorInterface
{

     public function __construct(
         private ProcessorInterface $processor,
         private MailService $service,
         private EntityManagerInterface $manager
     )
    {
    }

    /**
     * @inheritDoc
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        $this->manager->persist($data);
        $this->manager->flush();
        try {
            /** @var Dossier $data */
            if ($data->getCategorie()->getCode() == "SPONSOR") {
                $this->service->sendSponsorEmail($data);
            }else {
                $this->service->sendPartenaireEmail($data);
            }

        } catch (TransportExceptionInterface $e) {
        }
        return $data;
    }
}