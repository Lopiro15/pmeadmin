<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use App\Repository\CandidatureRepository;
use App\State\CandidatureProcessor;
use App\Traits\Horodatage;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: CandidatureRepository::class)]
#[ApiResource(
    operations: [
        new Post(processor: CandidatureProcessor::class),
        new Get()
    ],
    normalizationContext: ["groups" => ["read:candidature"]],
    denormalizationContext: ["groups" => ["write:candidature"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ORM\HasLifecycleCallbacks]
class Candidature
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:candidature"])]
    private ?int $id = null;

    /**
     * @var Collection<int, CategorieCandidature>
     */
    #[ORM\ManyToMany(targetEntity: CategorieCandidature::class, inversedBy: 'candidatures')]
    #[Groups(["read:candidature", "write:candidature"])]
    private Collection $categories;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $nomEntreprise = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $statutEntreprise = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?\DateTimeInterface $dateCreation = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $numRCCM = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $numCC = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $adresseSiege = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $ville = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $pays = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $siteWeb = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $fullnameRepresentant = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $fonctionRepresentant = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?\DateTimeInterface $dateNaissReresentant = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $genreRepresentant = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $paysRepresentant = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $secteurActivite = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $parcours = null;

    #[ORM\Column]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?int $effectif = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 3, nullable: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $ca2022 = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 3)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $ca2023 = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 12, scale: 3)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $ca2024 = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $produits = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $realisation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private ?string $impact = null;

    /**
     * @var Collection<int, JustificatifCandidature>
     */
    #[ORM\OneToMany(targetEntity: JustificatifCandidature::class, mappedBy: 'candidature', cascade: ["persist", "remove"], orphanRemoval: true)]
    #[Groups(["read:candidature", "write:candidature"])]
    private Collection $justificatifs;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->justificatifs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, CategorieCandidature>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(CategorieCandidature $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
        }

        return $this;
    }

    public function removeCategory(CategorieCandidature $category): static
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function getNomEntreprise(): ?string
    {
        return $this->nomEntreprise;
    }

    public function setNomEntreprise(string $nomEntreprise): static
    {
        $this->nomEntreprise = $nomEntreprise;

        return $this;
    }

    public function getStatutEntreprise(): ?string
    {
        return $this->statutEntreprise;
    }

    public function setStatutEntreprise(string $statutEntreprise): static
    {
        $this->statutEntreprise = $statutEntreprise;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->dateCreation;
    }

    public function setDateCreation(\DateTimeInterface $dateCreation): static
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    public function getNumRCCM(): ?string
    {
        return $this->numRCCM;
    }

    public function setNumRCCM(string $numRCCM): static
    {
        $this->numRCCM = $numRCCM;

        return $this;
    }

    public function getNumCC(): ?string
    {
        return $this->numCC;
    }

    public function setNumCC(string $numCC): static
    {
        $this->numCC = $numCC;

        return $this;
    }

    public function getAdresseSiege(): ?string
    {
        return $this->adresseSiege;
    }

    public function setAdresseSiege(string $adresseSiege): static
    {
        $this->adresseSiege = $adresseSiege;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): static
    {
        $this->ville = $ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(string $pays): static
    {
        $this->pays = $pays;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getSiteWeb(): ?string
    {
        return $this->siteWeb;
    }

    public function setSiteWeb(?string $siteWeb): static
    {
        $this->siteWeb = $siteWeb;

        return $this;
    }

    public function getFullnameRepresentant(): ?string
    {
        return $this->fullnameRepresentant;
    }

    public function setFullnameRepresentant(string $fullnameRepresentant): static
    {
        $this->fullnameRepresentant = $fullnameRepresentant;

        return $this;
    }

    public function getFonctionRepresentant(): ?string
    {
        return $this->fonctionRepresentant;
    }

    public function setFonctionRepresentant(string $fonctionRepresentant): static
    {
        $this->fonctionRepresentant = $fonctionRepresentant;

        return $this;
    }

    public function getDateNaissReresentant(): ?\DateTimeInterface
    {
        return $this->dateNaissReresentant;
    }

    public function setDateNaissReresentant(\DateTimeInterface $dateNaissReresentant): static
    {
        $this->dateNaissReresentant = $dateNaissReresentant;

        return $this;
    }

    public function getGenreRepresentant(): ?string
    {
        return $this->genreRepresentant;
    }

    public function setGenreRepresentant(string $genreRepresentant): static
    {
        $this->genreRepresentant = $genreRepresentant;

        return $this;
    }

    public function getPaysRepresentant(): ?string
    {
        return $this->paysRepresentant;
    }

    public function setPaysRepresentant(string $paysRepresentant): static
    {
        $this->paysRepresentant = $paysRepresentant;

        return $this;
    }

    public function getSecteurActivite(): ?string
    {
        return $this->secteurActivite;
    }

    public function setSecteurActivite(string $secteurActivite): static
    {
        $this->secteurActivite = $secteurActivite;

        return $this;
    }

    public function getParcours(): ?string
    {
        return $this->parcours;
    }

    public function setParcours(?string $parcours): static
    {
        $this->parcours = $parcours;

        return $this;
    }

    public function getEffectif(): ?int
    {
        return $this->effectif;
    }

    public function setEffectif(int $effectif): static
    {
        $this->effectif = $effectif;

        return $this;
    }

    public function getCa2022(): ?string
    {
        return $this->ca2022;
    }

    public function setCa2022(?string $ca2022): static
    {
        $this->ca2022 = $ca2022;

        return $this;
    }

    public function getCa2023(): ?string
    {
        return $this->ca2023;
    }

    public function setCa2023(string $ca2023): static
    {
        $this->ca2023 = $ca2023;

        return $this;
    }

    public function getCa2024(): ?string
    {
        return $this->ca2024;
    }

    public function setCa2024(string $ca2024): static
    {
        $this->ca2024 = $ca2024;

        return $this;
    }

    public function getProduits(): ?string
    {
        return $this->produits;
    }

    public function setProduits(string $produits): static
    {
        $this->produits = $produits;

        return $this;
    }

    public function getRealisation(): ?string
    {
        return $this->realisation;
    }

    public function setRealisation(?string $realisation): static
    {
        $this->realisation = $realisation;

        return $this;
    }

    public function getImpact(): ?string
    {
        return $this->impact;
    }

    public function setImpact(?string $impact): static
    {
        $this->impact = $impact;

        return $this;
    }

    /**
     * @return Collection<int, JustificatifCandidature>
     */
    public function getJustificatifs(): Collection
    {
        return $this->justificatifs;
    }

    public function addJustificatif(JustificatifCandidature $justificatif): static
    {
        if (!$this->justificatifs->contains($justificatif)) {
            $this->justificatifs->add($justificatif);
            $justificatif->setCandidature($this);
        }

        return $this;
    }

    public function removeJustificatif(JustificatifCandidature $justificatif): static
    {
        if ($this->justificatifs->removeElement($justificatif)) {
            // set the owning side to null (unless already changed)
            if ($justificatif->getCandidature() === $this) {
                $justificatif->setCandidature(null);
            }
        }

        return $this;
    }
}
