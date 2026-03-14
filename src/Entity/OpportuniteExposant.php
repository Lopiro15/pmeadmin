<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\OpportuniteExposantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:opportuniteExposant']
)]
#[ORM\Entity(repositoryClass: OpportuniteExposantRepository::class)]
class OpportuniteExposant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:opportuniteExposant'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlack = null;

    #[Groups(['read:opportuniteExposant'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreRouge = null;

    #[Groups(['read:opportuniteExposant'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, DetailOpportuniteExposant>
     */
    #[ORM\OneToMany(targetEntity: DetailOpportuniteExposant::class, mappedBy: 'opportunite')]
    private Collection $cards;

    public function __construct()
    {
        $this->cards = new ArrayCollection();
    }

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
     * @return Collection<int, DetailOpportuniteExposant>
     */
    public function getCards(): Collection
    {
        return $this->cards;
    }

    public function addCard(DetailOpportuniteExposant $card): static
    {
        if (!$this->cards->contains($card)) {
            $this->cards->add($card);
            $card->setOpportunite($this);
        }

        return $this;
    }

    public function removeCard(DetailOpportuniteExposant $card): static
    {
        if ($this->cards->removeElement($card)) {
            // set the owning side to null (unless already changed)
            if ($card->getOpportunite() === $this) {
                $card->setOpportunite(null);
            }
        }

        return $this;
    }
}
