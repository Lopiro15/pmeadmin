<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Repository\ReservationRepository;
use App\State\ReservationProcessor;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
#[ApiResource(
    operations: [
        new Post(processor: ReservationProcessor::class),
        new Get()
    ],
    normalizationContext: ["groups" => ["read:reserv"]],
    denormalizationContext: ["groups" => ["write:reserv"]],
//    security: "is_granted('ROLE_USER')",
)]
#[ORM\HasLifecycleCallbacks]
class Reservation
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["read:reserv"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?string $fullname = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?string $fonction = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?TypeTicket $typeTicket = null;

    #[ORM\Column]
    #[Groups(["read:reserv", "write:reserv"])]
    private ?int $quantity = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): static
    {
        $this->fullname = $fullname;

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

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): static
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getTypeTicket(): ?TypeTicket
    {
        return $this->typeTicket;
    }

    public function setTypeTicket(?TypeTicket $typeTicket): static
    {
        $this->typeTicket = $typeTicket;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }
}
