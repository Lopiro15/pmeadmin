<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PaysInviteGalaRepository;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:paysInvite']
)]
#[ORM\Entity(repositoryClass: PaysInviteGalaRepository::class)]
#[ORM\HasLifecycleCallbacks]
class PaysInviteGala
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:paysInvite'])]
    private ?string $nom = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:paysInvite'])]
    private ?string $minNom = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:paysInvite'])]
    private ?string $labelEdition = null;

    #[ORM\ManyToOne(inversedBy: 'paysInviteGalas')]
    private ?RetroGala $retro = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getMinNom(): ?string
    {
        return $this->minNom;
    }

    public function setMinNom(?string $minNom): static
    {
        $this->minNom = $minNom;

        return $this;
    }

    public function getLabelEdition(): ?string
    {
        return $this->labelEdition;
    }

    public function setLabelEdition(?string $labelEdition): static
    {
        $this->labelEdition = $labelEdition;

        return $this;
    }

    public function getRetro(): ?RetroGala
    {
        return $this->retro;
    }

    public function setRetro(?RetroGala $retro): static
    {
        $this->retro = $retro;

        return $this;
    }
}
