<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;

class ReservationProcessor implements \ApiPlatform\State\ProcessorInterface
{

    public function __construct(private ProcessorInterface $processor)
    {
    }

    /**
     * @inheritDoc
     */
    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        // TODO: Implement process() method.
        return $this->processor->process($data, $operation, $uriVariables, $context);
    }
}