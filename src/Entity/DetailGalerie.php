<?php

namespace App\Entity;

use App\Repository\DetailGalerieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DetailGalerieRepository::class)]
class DetailGalerie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $edition = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, ClicheGalerie>
     */
    #[ORM\OneToMany(targetEntity: ClicheGalerie::class, mappedBy: 'detailGalerie', cascade: ["persist", "remove"], orphanRemoval: true)]
    private Collection $cliches;

    public function __construct()
    {
        $this->cliches = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEdition(): ?string
    {
        return $this->edition;
    }

    public function setEdition(?string $edition): static
    {
        $this->edition = $edition;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

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

    /**
     * @return Collection<int, ClicheGalerie>
     */
    public function getCliches(): Collection
    {
        return $this->cliches;
    }

    public function addClich(ClicheGalerie $clich): static
    {
        if (!$this->cliches->contains($clich)) {
            $this->cliches->add($clich);
            $clich->setDetailGalerie($this);
        }

        return $this;
    }

    public function removeClich(ClicheGalerie $clich): static
    {
        if ($this->cliches->removeElement($clich)) {
            // set the owning side to null (unless already changed)
            if ($clich->getDetailGalerie() === $this) {
                $clich->setDetailGalerie(null);
            }
        }

        return $this;
    }
}
