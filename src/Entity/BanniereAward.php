<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\BanniereAwardRepository;
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
    normalizationContext: ['groups' => 'read:banniereAward']
)]
#[ORM\Entity(repositoryClass: BanniereAwardRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class BanniereAward
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:banniereAward'])]
    private ?int $id = null;

    #[Groups(['read:banniereAward'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $badge = null;

    #[Groups(['read:banniereAward'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlanc = null;

    #[Groups(['read:banniereAward'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreRouge = null;

    #[Groups(['read:banniereAward'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imageName = null;

    #[Groups(['read:banniereAward'])]
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

    public function setBadge(?string $badge): static
    {
        $this->badge = $badge;

        return $this;
    }

    public function getTitreBlanc(): ?string
    {
        return $this->titreBlanc;
    }

    public function setTitreBlanc(?string $titreBlanc): static
    {
        $this->titreBlanc = $titreBlanc;

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
