<?php

namespace App\Serializer;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Exception\BadMethodCallException;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Exception\ExtraAttributesException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Exception\RuntimeException;
use Symfony\Component\Serializer\Exception\UnexpectedValueException;

class UploadedFileDenormalizer implements \Symfony\Component\Serializer\Normalizer\DenormalizerInterface
{

    /**
     * @inheritDoc
     */
    public function denormalize(mixed $data, string $type, ?string $format = null, array $context = []): mixed
    {
        return $data;
    }

    /**
     * @inheritDoc
     */
    public function supportsDenormalization(mixed $data, string $type, ?string $format = null, array $context = []): bool
    {
        return $data instanceof File;
    }

    /**
     * @inheritDoc
     */
    public function getSupportedTypes(?string $format): array
    {
        return [
            'object' => null,
            '*' => false,
            File::class => true,
        ];
    }
}