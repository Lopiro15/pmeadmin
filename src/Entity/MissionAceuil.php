<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\MissionAceuilRepository;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:missionAccueil']
)]
#[ORM\Entity(repositoryClass: MissionAceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class MissionAceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:missionAccueil'])]
    private ?string $miniTitre = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:missionAccueil'])]
    private ?string $titreBlanc = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:missionAccueil'])]
    private ?string $titreRouge = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:missionAccueil'])]
    private ?string $description = null;

    /**
     * @var Collection<int, PilierMissionAceuil>
     */
    #[ORM\OneToMany(targetEntity: PilierMissionAceuil::class, mappedBy: 'mission')]
    private Collection $piliers;

    public function __construct()
    {
        $this->piliers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMiniTitre(): ?string
    {
        return $this->miniTitre;
    }

    public function setMiniTitre(string $miniTitre): static
    {
        $this->miniTitre = $miniTitre;

        return $this;
    }

    public function getTitreBlanc(): ?string
    {
        return $this->titreBlanc;
    }

    public function setTitreBlanc(string $titreBlanc): static
    {
        $this->titreBlanc = $titreBlanc;

        return $this;
    }

    public function getTitreRouge(): ?string
    {
        return $this->titreRouge;
    }

    public function setTitreRouge(string $titreRouge): static
    {
        $this->titreRouge = $titreRouge;

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

    /**
     * @return Collection<int, PilierMissionAceuil>
     */
    public function getPiliers(): Collection
    {
        return $this->piliers;
    }

    public function addPilier(PilierMissionAceuil $pilier): static
    {
        if (!$this->piliers->contains($pilier)) {
            $this->piliers->add($pilier);
            $pilier->setMission($this);
        }

        return $this;
    }

    public function removePilier(PilierMissionAceuil $pilier): static
    {
        if ($this->piliers->removeElement($pilier)) {
            // set the owning side to null (unless already changed)
            if ($pilier->getMission() === $this) {
                $pilier->setMission(null);
            }
        }

        return $this;
    }
}
