<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\BanniereContactRepository;
use App\Traits\Horodatage;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Attribute\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource(
    operations: [
        new Get(),
        new GetCollection()
    ],
    normalizationContext: ['groups' => 'read:banniereContact']
)]
#[ORM\Entity(repositoryClass: BanniereContactRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class BanniereContact
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $badge = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $infoline = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $descriptionInfoline = null;


    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $descriptionEmail = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imageName = null;

    #[Groups(['read:banniereContact'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imagePath = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'imageName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $imageFile = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBadge(): ?string
    {
        return $this->badge;
    }

    public function setBadge(?string $svg): static
    {
        $this->badge = $svg;

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

    public function getInfoline(): ?string
    {
        return $this->infoline;
    }

    public function setInfoline(?string $infoline): static
    {
        $this->infoline = $infoline;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getDescriptionEmail(): ?string
    {
        return $this->descriptionEmail;
    }

    public function setDescriptionEmail(?string $descriptionEmail): static
    {
        $this->descriptionEmail = $descriptionEmail;

        return $this;
    }

    public function getDescriptionInfoline(): ?string
    {
        return $this->descriptionInfoline;
    }

    public function setDescriptionInfoline(?string $descriptionInfoline): static
    {
        $this->descriptionInfoline = $descriptionInfoline;

        return $this;
    }


    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(?string $imageName): static
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getImagePath(): ?string
    {
        if ($this->imageName) {
            return '/images/site/'. $this->imageName;
        }
        return $this->imagePath;
    }

    public function setImagePath(?string $imagePath): static
    {
        $this->imagePath = $imagePath;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }
}
