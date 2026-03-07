<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\HallOfFameGalaRepository;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:halloffame']
)]
#[ORM\Entity(repositoryClass: HallOfFameGalaRepository::class)]
#[ORM\HasLifecycleCallbacks]
class HallOfFameGala
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:halloffame'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $badge = null;

    #[Groups(['read:halloffame'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlack = null;

    #[Groups(['read:halloffame'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreRouge = null;

    #[Groups(['read:halloffame'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, EntrepriseHallOfFame>
     */
    #[ORM\OneToMany(targetEntity: EntrepriseHallOfFame::class, mappedBy: 'hallOfFame')]
    private Collection $entreprises;

    public function __construct()
    {
        $this->entreprises = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBadge(): ?string
    {
        return $this->badge;
    }

    public function setBadge(?string $badge): static
    {
        $this->badge = $badge;

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

    public function getTitreRouge(): ?string
    {
        return $this->titreRouge;
    }

    public function setTitreRouge(?string $titreRouge): static
    {
        $this->titreRouge = $titreRouge;

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
     * @return Collection<int, EntrepriseHallOfFame>
     */
    public function getEntreprises(): Collection
    {
        return $this->entreprises;
    }

    public function addEntreprise(EntrepriseHallOfFame $entreprise): static
    {
        if (!$this->entreprises->contains($entreprise)) {
            $this->entreprises->add($entreprise);
            $entreprise->setHallOfFame($this);
        }

        return $this;
    }

    public function removeEntreprise(EntrepriseHallOfFame $entreprise): static
    {
        if ($this->entreprises->removeElement($entreprise)) {
            // set the owning side to null (unless already changed)
            if ($entreprise->getHallOfFame() === $this) {
                $entreprise->setHallOfFame(null);
            }
        }

        return $this;
    }
}
