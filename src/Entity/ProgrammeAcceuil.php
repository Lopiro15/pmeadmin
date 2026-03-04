<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ProgrammeAcceuilRepository;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:programmeAccueil']
)]
#[ORM\Entity(repositoryClass: ProgrammeAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ProgrammeAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:programmeAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $miniBadge = null;

    #[Groups(['read:programmeAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlack = null;

    #[Groups(['read:programmeAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreRed = null;

    #[Groups(['read:programmeAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMiniBadge(): ?string
    {
        return $this->miniBadge;
    }

    public function setMiniBadge(string $miniBadge): static
    {
        $this->miniBadge = $miniBadge;

        return $this;
    }

    public function getTitreBlack(): ?string
    {
        return $this->titreBlack;
    }

    public function setTitreBlack(string $titreBlack): static
    {
        $this->titreBlack = $titreBlack;

        return $this;
    }

    public function getTitreRed(): ?string
    {
        return $this->titreRed;
    }

    public function setTitreRed(string $titreRed): static
    {
        $this->titreRed = $titreRed;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
