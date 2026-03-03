<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\StatsAcceuilRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: StatsAcceuilRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:statAccueil']
)]
class StatsAcceuil
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:statAccueil'])]
    private ?int $valeur = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:statAccueil'])]
    private ?string $label = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:statAccueil'])]
    private ?bool $isPlus = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValeur(): ?int
    {
        return $this->valeur;
    }

    public function setValeur(int $valeur): static
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function isPlus(): ?bool
    {
        return $this->isPlus;
    }

    public function setPlus(?bool $isPlus): static
    {
        $this->isPlus = $isPlus;

        return $this;
    }
}
