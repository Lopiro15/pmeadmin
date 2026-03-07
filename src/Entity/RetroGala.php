<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\RetroGalaRepository;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:retrogala']
)]
#[ORM\Entity(repositoryClass: RetroGalaRepository::class)]
#[ORM\HasLifecycleCallbacks]
class RetroGala
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?int $debut = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?int $fin = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?string $titreBlack = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?string $titreGris = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?int $nbPmeIncrite = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?int $nbParticipant = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 3, scale: 1, nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?string $proportionChef = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 3, scale: 1, nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?string $proportionPublic = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 3, scale: 1, nullable: true)]
    #[Groups(['read:retrogala'])]
    private ?string $proportionCadre = null;

    /**
     * @var Collection<int, PaysInviteGala>
     */
    #[ORM\OneToMany(targetEntity: PaysInviteGala::class, mappedBy: 'retro')]
    private Collection $paysInviteGalas;

    public function __construct()
    {
        $this->paysInviteGalas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDebut(): ?int
    {
        return $this->debut;
    }

    public function setDebut(?int $debut): static
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?int
    {
        return $this->fin;
    }

    public function setFin(?int $fin): static
    {
        $this->fin = $fin;

        return $this;
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

    public function getNbPmeIncrite(): ?int
    {
        return $this->nbPmeIncrite;
    }

    public function setNbPmeIncrite(?int $nbPmeIncrite): static
    {
        $this->nbPmeIncrite = $nbPmeIncrite;

        return $this;
    }

    public function getNbParticipant(): ?int
    {
        return $this->nbParticipant;
    }

    public function setNbParticipant(?int $nbParticipant): static
    {
        $this->nbParticipant = $nbParticipant;

        return $this;
    }

    public function getProportionChef(): ?string
    {
        return $this->proportionChef;
    }

    public function setProportionChef(?string $proportionChef): static
    {
        $this->proportionChef = $proportionChef;

        return $this;
    }

    public function getProportionPublic(): ?string
    {
        return $this->proportionPublic;
    }

    public function setProportionPublic(?string $proportionPublic): static
    {
        $this->proportionPublic = $proportionPublic;

        return $this;
    }

    public function getProportionCadre(): ?string
    {
        return $this->proportionCadre;
    }

    public function setProportionCadre(?string $proportionCadre): static
    {
        $this->proportionCadre = $proportionCadre;

        return $this;
    }

    /**
     * @return Collection<int, PaysInviteGala>
     */
    public function getPaysInviteGalas(): Collection
    {
        return $this->paysInviteGalas;
    }

    public function addPaysInviteGala(PaysInviteGala $paysInviteGala): static
    {
        if (!$this->paysInviteGalas->contains($paysInviteGala)) {
            $this->paysInviteGalas->add($paysInviteGala);
            $paysInviteGala->setRetro($this);
        }

        return $this;
    }

    public function removePaysInviteGala(PaysInviteGala $paysInviteGala): static
    {
        if ($this->paysInviteGalas->removeElement($paysInviteGala)) {
            // set the owning side to null (unless already changed)
            if ($paysInviteGala->getRetro() === $this) {
                $paysInviteGala->setRetro(null);
            }
        }

        return $this;
    }
}
