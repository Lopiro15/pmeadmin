<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use App\Repository\ParticipantRepository;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ApiResource(
    operations: [
        new Post(),
        new Get()
    ],
    normalizationContext: ["groups" => ["read:participant"]],
    denormalizationContext: ["groups" => ["write:participant"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ORM\Entity(repositoryClass: ParticipantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Participant
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:participant"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $prenoms = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $entreprise = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $fonction = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:participant", "write:participant"])]
    private ?string $contact = null;

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

    public function getPrenoms(): ?string
    {
        return $this->prenoms;
    }

    public function setPrenoms(string $prenoms): static
    {
        $this->prenoms = $prenoms;

        return $this;
    }

    public function getEntreprise(): ?string
    {
        return $this->entreprise;
    }

    public function setEntreprise(string $entreprise): static
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): static
    {
        $this->fonction = $fonction;

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

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(string $contact): static
    {
        $this->contact = $contact;

        return $this;
    }
}
