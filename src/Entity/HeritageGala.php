<?php

namespace App\Entity;

use App\Repository\HeritageGalaRepository;
use App\Traits\Horodatage;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: HeritageGalaRepository::class)]
#[ORM\HasLifecycleCallbacks]
class HeritageGala
{

    use Horodatage;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $badge = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titreBlanc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sousTitre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1descriptiongris = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1descriptionblanc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1descriptiongris2 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1ImageName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card1ImagePath = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'card1ImageName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $card1ImageFile = null;

    #[ORM\Column(nullable: true)]
    private ?int $card2Nb = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card2Label = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card2LabelRouge = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card2Description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card3TitreMini = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card3Titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card3Description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card3ImageFondName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card3ImageFondPath = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'card3ImageFondName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $card3ImageFondFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card4TitreOr = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card4TitreBlanc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card4LabelGris = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card4ImageName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card4ImagePath = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'card4ImageName')]
    #[Assert\File(
        maxSize: "15M",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
        mimeTypesMessage: "Mauvais Type"
    )]
    private ?File $card4ImageFile = null;

    #[ORM\Column(nullable: true)]
    private ?int $card5Nb = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $card5label = null;

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

    public function getSousTitre(): ?string
    {
        return $this->sousTitre;
    }

    public function setSousTitre(?string $sousTitre): static
    {
        $this->sousTitre = $sousTitre;

        return $this;
    }

    public function getCard1titre(): ?string
    {
        return $this->card1titre;
    }

    public function setCard1titre(?string $card1titre): static
    {
        $this->card1titre = $card1titre;

        return $this;
    }

    public function getCard1descriptiongris(): ?string
    {
        return $this->card1descriptiongris;
    }

    public function setCard1descriptiongris(?string $card1descriptiongris): static
    {
        $this->card1descriptiongris = $card1descriptiongris;

        return $this;
    }

    public function getCard1descriptionblanc(): ?string
    {
        return $this->card1descriptionblanc;
    }

    public function setCard1descriptionblanc(?string $card1descriptionblanc): static
    {
        $this->card1descriptionblanc = $card1descriptionblanc;

        return $this;
    }

    public function getCard1descriptiongris2(): ?string
    {
        return $this->card1descriptiongris2;
    }

    public function setCard1descriptiongris2(?string $card1descriptiongris2): static
    {
        $this->card1descriptiongris2 = $card1descriptiongris2;

        return $this;
    }

    public function getCard1ImageName(): ?string
    {
        return $this->card1ImageName;
    }

    public function setCard1ImageName(?string $card1ImageName): static
    {
        $this->card1ImageName = $card1ImageName;

        return $this;
    }

    public function getCard1ImagePath(): ?string
    {
        if ($this->card1ImageName) {
            return '/images/site/'. $this->card1ImageName;
        }
        return $this->card1ImagePath;
    }

    public function setCard1ImagePath(?string $card1ImagePath): static
    {
        $this->card1ImagePath = $card1ImagePath;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $card1ImageFile
     */
    public function setCard1ImageFile(?File $card1ImageFile = null): void
    {
        $this->card1ImageFile = $card1ImageFile;

        if (null !== $card1ImageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getCard1ImageFile(): ?File
    {
        return $this->card1ImageFile;
    }

    public function getCard2Nb(): ?int
    {
        return $this->card2Nb;
    }

    public function setCard2Nb(?int $card2Nb): static
    {
        $this->card2Nb = $card2Nb;

        return $this;
    }

    public function getCard2Label(): ?string
    {
        return $this->card2Label;
    }

    public function setCard2Label(?string $card2Label): static
    {
        $this->card2Label = $card2Label;

        return $this;
    }

    public function getCard2LabelRouge(): ?string
    {
        return $this->card2LabelRouge;
    }

    public function setCard2LabelRouge(?string $card2LabelRouge): static
    {
        $this->card2LabelRouge = $card2LabelRouge;

        return $this;
    }

    public function getCard2Description(): ?string
    {
        return $this->card2Description;
    }

    public function setCard2Description(?string $card2Description): static
    {
        $this->card2Description = $card2Description;

        return $this;
    }

    public function getCard3TitreMini(): ?string
    {
        return $this->card3TitreMini;
    }

    public function setCard3TitreMini(?string $card3TitreMini): static
    {
        $this->card3TitreMini = $card3TitreMini;

        return $this;
    }

    public function getCard3Titre(): ?string
    {
        return $this->card3Titre;
    }

    public function setCard3Titre(?string $card3Titre): static
    {
        $this->card3Titre = $card3Titre;

        return $this;
    }

    public function getCard3Description(): ?string
    {
        return $this->card3Description;
    }

    public function setCard3Description(?string $card3Description): static
    {
        $this->card3Description = $card3Description;

        return $this;
    }

    public function getCard3ImageFondName(): ?string
    {
        return $this->card3ImageFondName;
    }

    public function setCard3ImageFondName(?string $card3ImageFondName): static
    {
        $this->card3ImageFondName = $card3ImageFondName;

        return $this;
    }

    public function getCard3ImageFondPath(): ?string
    {
        if ($this->card3ImageFondName) {
            return '/images/site/'. $this->card3ImageFondName;
        }
        return $this->card3ImageFondPath;
    }

    public function setCard3ImageFondPath(?string $card3ImageFondPath): static
    {
        $this->card3ImageFondPath = $card3ImageFondPath;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $card1ImageFile
     */
    public function setCard3ImageFondFile(?File $card1ImageFile = null): void
    {
        $this->card3ImageFondFile = $card1ImageFile;

        if (null !== $card1ImageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getCard3ImageFondFile(): ?File
    {
        return $this->card3ImageFondFile;
    }

    public function getCard4TitreOr(): ?string
    {
        return $this->card4TitreOr;
    }

    public function setCard4TitreOr(?string $card4TitreOr): static
    {
        $this->card4TitreOr = $card4TitreOr;

        return $this;
    }

    public function getCard4TitreBlanc(): ?string
    {
        return $this->card4TitreBlanc;
    }

    public function setCard4TitreBlanc(?string $card4TitreBlanc): static
    {
        $this->card4TitreBlanc = $card4TitreBlanc;

        return $this;
    }

    public function getCard4LabelGris(): ?string
    {
        return $this->card4LabelGris;
    }

    public function setCard4LabelGris(?string $card4LabelGris): static
    {
        $this->card4LabelGris = $card4LabelGris;

        return $this;
    }

    public function getCard4ImageName(): ?string
    {
        return $this->card4ImageName;
    }

    public function setCard4ImageName(?string $card4ImageName): static
    {
        $this->card4ImageName = $card4ImageName;

        return $this;
    }

    public function getCard4ImagePath(): ?string
    {
        if ($this->card4ImageName) {
            return '/images/site/'. $this->card4ImageName;
        }
        return $this->card4ImagePath;
    }

    public function setCard4ImagePath(?string $card4ImagePath): static
    {
        $this->card4ImagePath = $card4ImagePath;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $card1ImageFile
     */
    public function setCard4ImageFile(?File $card4ImageFile = null): void
    {
        $this->card4ImageFile = $card4ImageFile;

        if (null !== $card4ImageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getCard4ImageFile(): ?File
    {
        return $this->card4ImageFile;
    }

    public function getCard5Nb(): ?int
    {
        return $this->card5Nb;
    }

    public function setCard5Nb(?int $card5Nb): static
    {
        $this->card5Nb = $card5Nb;

        return $this;
    }

    public function getCard5label(): ?string
    {
        return $this->card5label;
    }

    public function setCard5label(?string $card5label): static
    {
        $this->card5label = $card5label;

        return $this;
    }

}
