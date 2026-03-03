<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\ThematiqueAcceuilRepository;
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
    normalizationContext: ['groups' => 'read:thematique']
)]
#[ORM\Entity(repositoryClass: ThematiqueAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ThematiqueAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:thematique'])]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $titre1 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $titre2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $lienManifeste = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:thematique'])]
    private ?int $nb = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $nbLabel = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read:thematique'])]
    private ?int $annee = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fileName = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'fileName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $file = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read:thematique'])]
    private ?string $filePath = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre1(): ?string
    {
        return $this->titre1;
    }

    public function setTitre1(string $titre1): static
    {
        $this->titre1 = $titre1;

        return $this;
    }

    public function getTitre2(): ?string
    {
        return $this->titre2;
    }

    public function setTitre2(string $titre2): static
    {
        $this->titre2 = $titre2;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getLienManifeste(): ?string
    {
        return $this->lienManifeste;
    }

    public function setLienManifeste(?string $lienManifeste): static
    {
        $this->lienManifeste = $lienManifeste;

        return $this;
    }

    public function getNb(): ?int
    {
        return $this->nb;
    }

    public function setNb(int $nb): static
    {
        $this->nb = $nb;

        return $this;
    }

    public function getNbLabel(): ?string
    {
        return $this->nbLabel;
    }

    public function setNbLabel(?string $nbLabel): static
    {
        $this->nbLabel = $nbLabel;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): static
    {
        $this->annee = $annee;

        return $this;
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(string $fileName): static
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
