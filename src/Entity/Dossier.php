<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use App\Repository\DossierRepository;
use App\State\DossierProcessor;
use App\Traits\Horodatage;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: DossierRepository::class)]
#[ApiResource(
    operations: [
        new Post(processor: DossierProcessor::class),
        new Get()
    ],
    normalizationContext: ["groups" => ["read:dossier"]],
    denormalizationContext: ["groups" => ["write:dossier"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ORM\HasLifecycleCallbacks]
class Dossier
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:dossier"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $nomEntreprise = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $statutEntreprise = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?\DateTimeInterface $dateCreation = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $numRccm = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $numCC = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $villePays = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $siteweb = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $nomRep = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $fonctionRep = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $raison = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $objectif = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?string $communication = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?CategorieDossier $categorie = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?TypeDossier $type = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    #[Groups(["read:dossier", "write:dossier"])]
    private ?PackageDossier $package = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getNumRccm(): ?string
    {
        return $this->numRccm;
    }

    public function setNumRccm(string $numRccm): static
    {
        $this->numRccm = $numRccm;

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

    public function getVillePays(): ?string
    {
        return $this->villePays;
    }

    public function setVillePays(string $villePays): static
    {
        $this->villePays = $villePays;

        return $this;
    }

    public function getSiteweb(): ?string
    {
        return $this->siteweb;
    }

    public function setSiteweb(?string $siteweb): static
    {
        $this->siteweb = $siteweb;

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

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getNomRep(): ?string
    {
        return $this->nomRep;
    }

    public function setNomRep(string $nomRep): static
    {
        $this->nomRep = $nomRep;

        return $this;
    }

    public function getFonctionRep(): ?string
    {
        return $this->fonctionRep;
    }

    public function setFonctionRep(string $fonctionRep): static
    {
        $this->fonctionRep = $fonctionRep;

        return $this;
    }

    public function getRaison(): ?string
    {
        return $this->raison;
    }

    public function setRaison(string $raison): static
    {
        $this->raison = $raison;

        return $this;
    }

    public function getObjectif(): ?string
    {
        return $this->objectif;
    }

    public function setObjectif(string $objectif): static
    {
        $this->objectif = $objectif;

        return $this;
    }

    public function getCommunication(): ?string
    {
        return $this->communication;
    }

    public function setCommunication(?string $communication): static
    {
        $this->communication = $communication;

        return $this;
    }

    public function getCategorie(): ?CategorieDossier
    {
        return $this->categorie;
    }

    public function setCategorie(?CategorieDossier $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getType(): ?TypeDossier
    {
        return $this->type;
    }

    public function setType(?TypeDossier $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getPackage(): ?PackageDossier
    {
        return $this->package;
    }

    public function setPackage(?PackageDossier $package): static
    {
        $this->package = $package;

        return $this;
    }
}
