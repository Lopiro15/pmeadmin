<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Controller\Api\SubscribeNewsLetterController;
use App\Filter\QueryFilter;
use App\Repository\MessageRepository;
use App\State\MessageProcessorState;
use App\Traits\Horodatage;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiResource(
    operations: [
        new Post(processor: MessageProcessorState::class),
        new Get(),
        new Post(
            uriTemplate: '/messages/subscribe',
            controller: SubscribeNewsLetterController::class,
            security: "is_granted('ROLE_USER')"
        ),
        new GetCollection(
            paginationEnabled: true,
            paginationItemsPerPage: 10,
            paginationClientEnabled: true
        ),
    ],
    normalizationContext: ["groups" => ["read:message"]],
    denormalizationContext: ["groups" => ["write:message"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ApiFilter(QueryFilter::class, properties: ["q"])]
#[ApiFilter(OrderFilter::class, properties: ["createdAt" => "desc"])]
class Message
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:message"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:message", "write:message"])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:message", "write:message"])]
    private ?string $fullName = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["read:message", "write:message"])]
    private ?string $content = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): static
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }
}
