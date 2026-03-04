<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\AgendaAcceuilRepository;
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
    normalizationContext: ['groups' => 'read:agendaAccueil']
)]
#[ORM\Entity(repositoryClass: AgendaAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class AgendaAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:agendaAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $badge = null;

    #[Groups(['read:agendaAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlack = null;

    #[Groups(['read:agendaAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreGris = null;

    /**
     * @var Collection<int, DetailAgendaAcceuil>
     */
    #[ORM\OneToMany(targetEntity: DetailAgendaAcceuil::class, mappedBy: 'agenda')]
    private Collection $detailAgendas;

    public function __construct()
    {
        $this->detailAgendas = new ArrayCollection();
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

    public function getTitreGris(): ?string
    {
        return $this->titreGris;
    }

    public function setTitreGris(?string $titreGris): static
    {
        $this->titreGris = $titreGris;

        return $this;
    }

    /**
     * @return Collection<int, DetailAgendaAcceuil>
     */
    public function getDetailAgendas(): Collection
    {
        return $this->detailAgendas;
    }

    public function addDetailAgenda(DetailAgendaAcceuil $detailAgenda): static
    {
        if (!$this->detailAgendas->contains($detailAgenda)) {
            $this->detailAgendas->add($detailAgenda);
            $detailAgenda->setAgenda($this);
        }

        return $this;
    }

    public function removeDetailAgenda(DetailAgendaAcceuil $detailAgenda): static
    {
        if ($this->detailAgendas->removeElement($detailAgenda)) {
            // set the owning side to null (unless already changed)
            if ($detailAgenda->getAgenda() === $this) {
                $detailAgenda->setAgenda(null);
            }
        }

        return $this;
    }
}
