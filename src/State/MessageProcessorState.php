<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Message;
use App\Service\MailService;

class MessageProcessorState implements \ApiPlatform\State\ProcessorInterface
{

    public function __construct(private MailService $service, private ProcessorInterface $processor)
    {
    }

    /**
     * @inheritDoc
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        /** @var Message $data */
        $this->service->sendContactEmail($data);
        return $this->processor->process($data, $operation, $uriVariables, $context);
    }
}