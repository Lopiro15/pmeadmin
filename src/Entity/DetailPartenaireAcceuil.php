<?php

namespace App\Entity;

use App\Repository\DetailPartenaireAcceuilRepository;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DetailPartenaireAcceuilRepository::class)]
#[ORM\HasLifecycleCallbacks]
class DetailPartenaireAcceuil
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $labelEntreprise = null;

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
    private ?string $filePath = null;

    #[ORM\ManyToOne(inversedBy: 'detailPartenaires')]
    private ?PartenaireAcceuil $sectionPartenaire = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabelEntreprise(): ?string
    {
        return $this->labelEntreprise;
    }

    public function setLabelEntreprise(?string $labelEntreprise): static
    {
        $this->labelEntreprise = $labelEntreprise;

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

    public function getSectionPartenaire(): ?PartenaireAcceuil
    {
        return $this->sectionPartenaire;
    }

    public function setSectionPartenaire(?PartenaireAcceuil $sectionPartenaire): static
    {
        $this->sectionPartenaire = $sectionPartenaire;

        return $this;
    }
}
