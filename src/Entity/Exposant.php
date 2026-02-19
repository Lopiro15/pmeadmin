<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use App\Repository\ExposantRepository;
use App\State\ExposantProcessor;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: ExposantRepository::class)]
#[ApiResource(
    operations: [
        new Post(processor: ExposantProcessor::class),
        new Get()
    ],
    normalizationContext: ["groups" => ["read:expo"]],
    denormalizationContext: ["groups" => ["write:expo"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ORM\HasLifecycleCallbacks]
class Exposant
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:expo"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:expo", "write:expo"])]
    private ?string $fullname = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:expo", "write:expo"])]
    private ?string $entreprise = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:expo", "write:expo"])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:expo", "write:expo"])]
    private ?string $typeProd = null;

    #[ORM\ManyToOne(inversedBy: 'exposants')]
    #[Groups(["read:expo", "write:expo"])]
    private ?PackExposant $pack = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): static
    {
        $this->fullname = $fullname;

        return $this;
    }

    public function getEntreprise(): ?string
    {
        return $this->entreprise;
    }

    public function setEntreprise(string $entreprise): static
    {
        $this->entreprise = $entreprise;

        return $this;
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

    public function getTypeProd(): ?string
    {
        return $this->typeProd;
    }

    public function setTypeProd(string $typeProd): static
    {
        $this->typeProd = $typeProd;

        return $this;
    }

    public function getPack(): ?PackExposant
    {
        return $this->pack;
    }

    public function setPack(?PackExposant $pack): static
    {
        $this->pack = $pack;

        return $this;
    }
}
