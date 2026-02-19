<?php

namespace App\Security;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\CustomCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;

class ApiKeyAuthenticator extends \Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator
{

    public function __construct(private UserRepository $userRepository)
    {
    }

    /**
     * @inheritDoc
     */
    public function supports(Request $request): ?bool
    {
        return $request->headers->has('X-API-KEY');
    }

    /**
     * @inheritDoc
     */
    public function authenticate(Request $request): Passport
    {
        $apiKey = $request->headers->get('X-API-KEY');

        return new Passport(
            new UserBadge($apiKey, function ($apiKey) {
                return $this->userRepository->findOneBy(['apiKey' => $apiKey]);
            }),
            new CustomCredentials(
                function ($credentials, $user) {
                    return $user !== null; // Valide si un utilisateur est trouvé
                },
                $apiKey
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    /**
     * @inheritDoc
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return new JsonResponse(["error" => "Invalid API Key"], Response::HTTP_UNAUTHORIZED);
    }
}