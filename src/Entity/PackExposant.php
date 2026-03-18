<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PackExposantRepository;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PackExposantRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:packExpo']
)]
#[ORM\HasLifecycleCallbacks]
class PackExposant
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:packExpo'])]
    private ?int $id = null;

    #[Groups(['read:packExpo'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $label = null;

    #[Groups(['read:packExpo'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $svg = null;

    #[Groups(['read:packExpo'])]
    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 3)]
    private ?string $montant = null;

    #[Groups(['read:packExpo'])]
    #[ORM\Column]
    private array $avantage = [];

    /**
     * @var Collection<int, Exposant>
     */
    #[ORM\OneToMany(targetEntity: Exposant::class, mappedBy: 'pack')]
    private Collection $exposants;

    public function __construct()
    {
        $this->exposants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(?string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getSvg(): ?string
    {
        return $this->svg;
    }

    public function setSvg(?string $svg): static
    {
        $this->svg = $svg;

        return $this;
    }

    public function getMontant(): ?string
    {
        return $this->montant;
    }

    public function setMontant(?string $montant): static
    {
        $this->montant = $montant;

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
     * @return Collection<int, Exposant>
     */
    public function getExposants(): Collection
    {
        return $this->exposants;
    }

    public function addExposant(Exposant $exposant): static
    {
        if (!$this->exposants->contains($exposant)) {
            $this->exposants->add($exposant);
            $exposant->setPack($this);
        }

        return $this;
    }

    public function removeExposant(Exposant $exposant): static
    {
        if ($this->exposants->removeElement($exposant)) {
            // set the owning side to null (unless already changed)
            if ($exposant->getPack() === $this) {
                $exposant->setPack(null);
            }
        }

        return $this;
    }
}
