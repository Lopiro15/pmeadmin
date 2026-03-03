<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Exposant;
use App\Service\MailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\Exception\TransportException;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

class ExposantProcessor implements \ApiPlatform\State\ProcessorInterface
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
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        $this->manager->persist($data);
        $this->manager->flush();
        try {
            /** @var Exposant $data */
            $this->service->sendExposantEmail($data);
        } catch (TransportExceptionInterface $e) {

        }
        return $data;
    }
}