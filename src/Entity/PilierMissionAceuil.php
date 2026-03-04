<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PilierMissionAceuilRepository;
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
    normalizationContext: ['groups' => 'read:pilierMissionAccueil']
)]
#[ORM\Entity(repositoryClass: PilierMissionAceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class PilierMissionAceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sousTitre = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $svg = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\ManyToOne(inversedBy: 'piliers')]
    private ?MissionAceuil $mission = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fileName = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'fileName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $file = null;

    #[Groups(['read:pilierMissionAccueil'])]
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $filePath = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getSousTitre(): ?string
    {
        return $this->sousTitre;
    }

    public function setSousTitre(string $sousTitre): static
    {
        $this->sousTitre = $sousTitre;

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

    public function getSvg(): ?string
    {
        return $this->svg;
    }

    public function setSvg(?string $svg): static
    {
        $this->svg = $svg;

        return $this;
    }

    public function getMission(): ?MissionAceuil
    {
        return $this->mission;
    }

    public function setMission(?MissionAceuil $mission): static
    {
        $this->mission = $mission;

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
