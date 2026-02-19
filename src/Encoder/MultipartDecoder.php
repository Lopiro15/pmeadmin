<?php

namespace App\Encoder;

use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Serializer\Exception\UnexpectedValueException;

class MultipartDecoder implements \Symfony\Component\Serializer\Encoder\DecoderInterface
{
    public const FORMAT = 'multipart';

    public function __construct(
        private RequestStack $requestStack
    )
    {
    }

    public function decode(string $data, string $format, array $context = []): mixed
    {
        $request = $this->requestStack->getCurrentRequest();
        if (!$request) {
            return null;
        }

        $payload = $request->request->all();

        $payload = $this->decodeRecursively($payload);

        if (array_key_exists('effectif', $payload)) {
            $payload['effectif'] = (int) $payload['effectif'];
        }

        // On fusionne avec les fichiers uploadés
        return array_replace_recursive($payload, $request->files->all());
    }

    private function decodeRecursively(mixed $value): mixed
    {
        // Si c’est un tableau (ex: categories, justificatifs[0], etc.)
        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $value[$k] = $this->decodeRecursively($v);
            }
            return $value;
        }

        // Si c’est une string, on tente un json_decode
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            return is_array($decoded) ? $decoded : $value;
        }

        return $value;
    }

    /**
     * @inheritDoc
     */
    public function supportsDecoding(string $format): bool
    {
        return self::FORMAT === $format;
    }
}