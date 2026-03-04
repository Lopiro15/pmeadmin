<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\LieuAcceuilRepository;
use App\Traits\Horodatage;
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
    normalizationContext: ['groups' => 'read:lieuAccueil']
)]
#[ORM\Entity(repositoryClass: LieuAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class LieuAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:lieuAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $miniTitre = null;

    #[Groups(['read:lieuAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lieu = null;

    #[Groups(['read:lieuAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $miniadresse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fileName = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'fileName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $file = null;

    #[Groups(['read:lieuAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $filePath = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMiniTitre(): ?string
    {
        return $this->miniTitre;
    }

    public function setMiniTitre(?string $miniTitre): static
    {
        $this->miniTitre = $miniTitre;

        return $this;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(?string $lieu): static
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getMiniadresse(): ?string
    {
        return $this->miniadresse;
    }

    public function setMiniadresse(?string $miniadresse): static
    {
        $this->miniadresse = $miniadresse;

        return $this;
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(?string $fileName): static
    {
        $this->fileName = $fileName;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $file
     */
    public function setFile(?File $file = null): void
    {
        $this->file = $file;

        if (null !== $file) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getFile(): ?File
    {
        return $this->file;
    }

    public function getFilePath(): ?string
    {
        if ($this->fileName) {
            return '/images/site/'. $this->fileName;
        }
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): static
    {
        $this->filePath = $filePath;

        return $this;
    }
}
