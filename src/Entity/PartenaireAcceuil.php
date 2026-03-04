<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PartenaireAcceuilRepository;
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
    normalizationContext: ['groups' => 'read:partenaireAccueil']
)]
#[ORM\Entity(repositoryClass: PartenaireAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class PartenaireAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $miniBadge = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlanc = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreGris = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cardSvg = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cardTitre = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cardDescription = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cardButtonLabel = null;

    #[Groups(['read:partenaireAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cardButtonLink = null;

    /**
     * @var Collection<int, DetailPartenaireAcceuil>
     */
    #[ORM\OneToMany(targetEntity: DetailPartenaireAcceuil::class, mappedBy: 'sectionPartenaire')]
    private Collection $detailPartenaires;

    public function __construct()
    {
        $this->detailPartenaires = new ArrayCollection();
    }

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

    public function getTitreBlanc(): ?string
    {
        return $this->titreBlanc;
    }

    public function setTitreBlanc(string $titreBlanc): static
    {
        $this->titreBlanc = $titreBlanc;

        return $this;
    }

    public function getTitreGris(): ?string
    {
        return $this->titreGris;
    }

    public function setTitreGris(string $titreGris): static
    {
        $this->titreGris = $titreGris;

        return $this;
    }

    public function getCardSvg(): ?string
    {
        return $this->cardSvg;
    }

    public function setCardSvg(string $cardSvg): static
    {
        $this->cardSvg = $cardSvg;

        return $this;
    }

    public function getCardTitre(): ?string
    {
        return $this->cardTitre;
    }

    public function setCardTitre(string $cardTitre): static
    {
        $this->cardTitre = $cardTitre;

        return $this;
    }

    public function getCardDescription(): ?string
    {
        return $this->cardDescription;
    }

    public function setCardDescription(string $cardDescription): static
    {
        $this->cardDescription = $cardDescription;

        return $this;
    }

    public function getCardButtonLabel(): ?string
    {
        return $this->cardButtonLabel;
    }

    public function setCardButtonLabel(string $cardButtonLabel): static
    {
        $this->cardButtonLabel = $cardButtonLabel;

        return $this;
    }

    public function getCardButtonLink(): ?string
    {
        return $this->cardButtonLink;
    }

    public function setCardButtonLink(?string $cardButtonLink): static
    {
        $this->cardButtonLink = $cardButtonLink;

        return $this;
    }

    /**
     * @return Collection<int, DetailPartenaireAcceuil>
     */
    public function getDetailPartenaires(): Collection
    {
        return $this->detailPartenaires;
    }

    public function addDetailPartenaire(DetailPartenaireAcceuil $detailPartenaire): static
    {
        if (!$this->detailPartenaires->contains($detailPartenaire)) {
            $this->detailPartenaires->add($detailPartenaire);
            $detailPartenaire->setSectionPartenaire($this);
        }

        return $this;
    }

    public function removeDetailPartenaire(DetailPartenaireAcceuil $detailPartenaire): static
    {
        if ($this->detailPartenaires->removeElement($detailPartenaire)) {
            // set the owning side to null (unless already changed)
            if ($detailPartenaire->getSectionPartenaire() === $this) {
                $detailPartenaire->setSectionPartenaire(null);
            }
        }

        return $this;
    }
}
