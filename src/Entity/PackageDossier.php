<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PackageDossierRepository;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PackageDossierRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:packageDossier']
)]
#[ORM\HasLifecycleCallbacks]
class PackageDossier
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:packageDossier'])]
    private ?int $id = null;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 3)]
    private ?string $tarif = null;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column]
    private array $avantage = [];

    /**
     * @var Collection<int, Dossier>
     */
    #[ORM\OneToMany(targetEntity: Dossier::class, mappedBy: 'package')]
    private Collection $dossiers;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column(nullable: true)]
    private ?bool $popu = null;

    #[Groups(['read:packageDossier'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    public function __construct()
    {
        $this->dossiers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getTarif(): ?string
    {
        return $this->tarif;
    }

    public function setTarif(string $tarif): static
    {
        $this->tarif = $tarif;

        return $this;
    }

    public function getAvantage(): array
    {
        return $this->avantage;
    }

    public function setAvantage(array $avantage): static
    {
        $this->avantage = $avantage;

        return $this;
    }

    /**
     * @return Collection<int, Dossier>
     */
    public function getDossiers(): Collection
    {
        return $this->dossiers;
    }

    public function addDossier(Dossier $dossier): static
    {
        if (!$this->dossiers->contains($dossier)) {
            $this->dossiers->add($dossier);
            $dossier->setPackage($this);
        }

        return $this;
    }

    public function removeDossier(Dossier $dossier): static
    {
        if ($this->dossiers->removeElement($dossier)) {
            // set the owning side to null (unless already changed)
            if ($dossier->getPackage() === $this) {
                $dossier->setPackage(null);
            }
        }

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function isPopu(): ?bool
    {
        return $this->popu;
    }

    public function setPopu(?bool $isPopu): static
    {
        $this->popu = $isPopu;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function __toString(): string
    {
        return $this->getNom();
    }

}
