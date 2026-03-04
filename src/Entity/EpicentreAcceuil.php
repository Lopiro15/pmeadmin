<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\EpicentreAcceuilRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:epicentreAccueil']
)]
#[ORM\Entity(repositoryClass: EpicentreAcceuilRepository::class)]
class EpicentreAcceuil
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlack = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreGris = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $adresseLongue = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lienCarte = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $descriptionInfoline = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $telephone = null;

    #[Groups(['read:epicentreAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreBlack(): ?string
    {
        return $this->titreBlack;
    }

    public function setTitreBlack(?string $titreBlack): static
    {
        $this->titreBlack = $titreBlack;

        return $this;
    }

    public function getTitreGris(): ?string
    {
        return $this->titreGris;
    }

    public function setTitreGris(?string $titreGris): static
    {
        $this->titreGris = $titreGris;

        return $this;
    }

    public function getAdresseLongue(): ?string
    {
        return $this->adresseLongue;
    }

    public function setAdresseLongue(?string $adresseLongue): static
    {
        $this->adresseLongue = $adresseLongue;

        return $this;
    }

    public function getLienCarte(): ?string
    {
        return $this->lienCarte;
    }

    public function setLienCarte(?string $lienCarte): static
    {
        $this->lienCarte = $lienCarte;

        return $this;
    }

    public function getDescriptionInfoline(): ?string
    {
        return $this->descriptionInfoline;
    }

    public function setDescriptionInfoline(?string $descriptionInfoline): static
    {
        $this->descriptionInfoline = $descriptionInfoline;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }
}
