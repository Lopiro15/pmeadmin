<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260226230419 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agenda_acceuil (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_gris VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banniere_award (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_rouge VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banniere_exposant (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_or VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banniere_galerie (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_rouge VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE banniere_sponsor (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_or VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carousel_acceuil (id INT AUTO_INCREMENT NOT NULL, mini_titre VARCHAR(255) DEFAULT NULL, blanc VARCHAR(255) DEFAULT NULL, titre_or VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carousel_gala (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, impact VARCHAR(255) DEFAULT NULL, annee INT DEFAULT NULL, label_annee VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carte_programme_acceuil (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) DEFAULT NULL, sous_titre VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, svg VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cliche_galerie (id INT AUTO_INCREMENT NOT NULL, detail_galerie_id INT DEFAULT NULL, legende VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_9250BDDB3949261D (detail_galerie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE critere_award (id INT AUTO_INCREMENT NOT NULL, svg LONGTEXT DEFAULT NULL, label VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE detail_agenda_acceuil (id INT AUTO_INCREMENT NOT NULL, agenda_id INT DEFAULT NULL, badge VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, lieu VARCHAR(255) DEFAULT NULL, debut TIME DEFAULT NULL, fin TIME DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E79D529AEA67784A (agenda_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE detail_galerie (id INT AUTO_INCREMENT NOT NULL, edition VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE detail_opportunite_exposant (id INT AUTO_INCREMENT NOT NULL, opportunite_id INT DEFAULT NULL, svg LONGTEXT DEFAULT NULL, badge VARCHAR(255) DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, link_detail VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_69B2D79180FBB128 (opportunite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE detail_partenaire_acceuil (id INT AUTO_INCREMENT NOT NULL, section_partenaire_id INT DEFAULT NULL, label_entreprise VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_740A6E45F0C30CC9 (section_partenaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entreprise_hall_of_fame (id INT AUTO_INCREMENT NOT NULL, hall_of_fame_id INT DEFAULT NULL, raison_social VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, linkedin VARCHAR(255) DEFAULT NULL, site_web VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_40CF2C9D45E6C464 (hall_of_fame_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE epicentre_acceuil (id INT AUTO_INCREMENT NOT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_gris VARCHAR(255) DEFAULT NULL, adresse_longue VARCHAR(255) DEFAULT NULL, lien_carte VARCHAR(255) DEFAULT NULL, description_infoline VARCHAR(255) DEFAULT NULL, telephone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE hall_of_fame_gala (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_rouge VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE heritage_gala (id INT AUTO_INCREMENT NOT NULL, badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, sous_titre VARCHAR(255) DEFAULT NULL, card1titre VARCHAR(255) DEFAULT NULL, card1descriptiongris VARCHAR(255) DEFAULT NULL, card1descriptionblanc VARCHAR(255) DEFAULT NULL, card1descriptiongris2 VARCHAR(255) DEFAULT NULL, card1_image_name VARCHAR(255) DEFAULT NULL, card1_image_path VARCHAR(255) DEFAULT NULL, card2_nb INT DEFAULT NULL, card2_label VARCHAR(255) DEFAULT NULL, card2_label_rouge VARCHAR(255) DEFAULT NULL, card2_description VARCHAR(255) DEFAULT NULL, card3_titre_mini VARCHAR(255) DEFAULT NULL, card3_titre VARCHAR(255) DEFAULT NULL, card3_description VARCHAR(255) DEFAULT NULL, card3_image_fond_name VARCHAR(255) DEFAULT NULL, card3_image_fond_path VARCHAR(255) DEFAULT NULL, card4_titre_or VARCHAR(255) DEFAULT NULL, card4_titre_blanc VARCHAR(255) DEFAULT NULL, card4_label_gris VARCHAR(255) DEFAULT NULL, card4_image_name VARCHAR(255) DEFAULT NULL, card4_image_path VARCHAR(255) DEFAULT NULL, card5_nb INT DEFAULT NULL, card5label VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lieu_acceuil (id INT AUTO_INCREMENT NOT NULL, mini_titre VARCHAR(255) DEFAULT NULL, lieu VARCHAR(255) DEFAULT NULL, miniadresse VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE mission_aceuil (id INT AUTO_INCREMENT NOT NULL, mini_titre VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_rouge VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE opportunite_exposant (id INT AUTO_INCREMENT NOT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_rouge VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partenaire_acceuil (id INT AUTO_INCREMENT NOT NULL, mini_badge VARCHAR(255) DEFAULT NULL, titre_blanc VARCHAR(255) DEFAULT NULL, titre_gris VARCHAR(255) DEFAULT NULL, card_svg VARCHAR(255) DEFAULT NULL, card_titre VARCHAR(255) DEFAULT NULL, card_description VARCHAR(255) DEFAULT NULL, card_button_label VARCHAR(255) DEFAULT NULL, card_button_link VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pays_invite_gala (id INT AUTO_INCREMENT NOT NULL, retro_id INT DEFAULT NULL, nom VARCHAR(255) DEFAULT NULL, min_nom VARCHAR(255) DEFAULT NULL, label_edition VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_8B1E4BC7BB3D2DC9 (retro_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pilier_mission_aceuil (id INT AUTO_INCREMENT NOT NULL, mission_id INT DEFAULT NULL, titre VARCHAR(255) DEFAULT NULL, sous_titre VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, svg VARCHAR(255) DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_A4227149BE6CAE90 (mission_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE programme_acceuil (id INT AUTO_INCREMENT NOT NULL, mini_badge VARCHAR(255) DEFAULT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_red VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE retro_gala (id INT AUTO_INCREMENT NOT NULL, debut INT DEFAULT NULL, fin INT DEFAULT NULL, titre_black VARCHAR(255) DEFAULT NULL, titre_gris VARCHAR(255) DEFAULT NULL, nb_pme_incrite INT DEFAULT NULL, nb_participant INT DEFAULT NULL, proportion_chef NUMERIC(3, 1) DEFAULT NULL, proportion_public NUMERIC(3, 1) DEFAULT NULL, proportion_cadre NUMERIC(3, 1) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stats_acceuil (id INT AUTO_INCREMENT NOT NULL, valeur INT DEFAULT NULL, label VARCHAR(255) DEFAULT NULL, is_plus TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE thematique_acceuil (id INT AUTO_INCREMENT NOT NULL, titre1 VARCHAR(255) DEFAULT NULL, titre2 VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, lien_manifeste VARCHAR(255) DEFAULT NULL, nb INT DEFAULT NULL, nb_label VARCHAR(255) DEFAULT NULL, annee INT DEFAULT NULL, file_name VARCHAR(255) DEFAULT NULL, file_path VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cliche_galerie ADD CONSTRAINT FK_9250BDDB3949261D FOREIGN KEY (detail_galerie_id) REFERENCES detail_galerie (id)');
        $this->addSql('ALTER TABLE detail_agenda_acceuil ADD CONSTRAINT FK_E79D529AEA67784A FOREIGN KEY (agenda_id) REFERENCES agenda_acceuil (id)');
        $this->addSql('ALTER TABLE detail_opportunite_exposant ADD CONSTRAINT FK_69B2D79180FBB128 FOREIGN KEY (opportunite_id) REFERENCES opportunite_exposant (id)');
        $this->addSql('ALTER TABLE detail_partenaire_acceuil ADD CONSTRAINT FK_740A6E45F0C30CC9 FOREIGN KEY (section_partenaire_id) REFERENCES partenaire_acceuil (id)');
        $this->addSql('ALTER TABLE entreprise_hall_of_fame ADD CONSTRAINT FK_40CF2C9D45E6C464 FOREIGN KEY (hall_of_fame_id) REFERENCES hall_of_fame_gala (id)');
        $this->addSql('ALTER TABLE pays_invite_gala ADD CONSTRAINT FK_8B1E4BC7BB3D2DC9 FOREIGN KEY (retro_id) REFERENCES retro_gala (id)');
        $this->addSql('ALTER TABLE pilier_mission_aceuil ADD CONSTRAINT FK_A4227149BE6CAE90 FOREIGN KEY (mission_id) REFERENCES mission_aceuil (id)');
        $this->addSql('ALTER TABLE categorie_candidature ADD mini_titre VARCHAR(255) DEFAULT NULL, ADD description LONGTEXT DEFAULT NULL, ADD image_name VARCHAR(255) DEFAULT NULL, ADD image_path VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE package_dossier ADD is_popu TINYINT(1) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cliche_galerie DROP FOREIGN KEY FK_9250BDDB3949261D');
        $this->addSql('ALTER TABLE detail_agenda_acceuil DROP FOREIGN KEY FK_E79D529AEA67784A');
        $this->addSql('ALTER TABLE detail_opportunite_exposant DROP FOREIGN KEY FK_69B2D79180FBB128');
        $this->addSql('ALTER TABLE detail_partenaire_acceuil DROP FOREIGN KEY FK_740A6E45F0C30CC9');
        $this->addSql('ALTER TABLE entreprise_hall_of_fame DROP FOREIGN KEY FK_40CF2C9D45E6C464');
        $this->addSql('ALTER TABLE pays_invite_gala DROP FOREIGN KEY FK_8B1E4BC7BB3D2DC9');
        $this->addSql('ALTER TABLE pilier_mission_aceuil DROP FOREIGN KEY FK_A4227149BE6CAE90');
        $this->addSql('DROP TABLE agenda_acceuil');
        $this->addSql('DROP TABLE banniere_award');
        $this->addSql('DROP TABLE banniere_exposant');
        $this->addSql('DROP TABLE banniere_galerie');
        $this->addSql('DROP TABLE banniere_sponsor');
        $this->addSql('DROP TABLE carousel_acceuil');
        $this->addSql('DROP TABLE carousel_gala');
        $this->addSql('DROP TABLE carte_programme_acceuil');
        $this->addSql('DROP TABLE cliche_galerie');
        $this->addSql('DROP TABLE critere_award');
        $this->addSql('DROP TABLE detail_agenda_acceuil');
        $this->addSql('DROP TABLE detail_galerie');
        $this->addSql('DROP TABLE detail_opportunite_exposant');
        $this->addSql('DROP TABLE detail_partenaire_acceuil');
        $this->addSql('DROP TABLE entreprise_hall_of_fame');
        $this->addSql('DROP TABLE epicentre_acceuil');
        $this->addSql('DROP TABLE hall_of_fame_gala');
        $this->addSql('DROP TABLE heritage_gala');
        $this->addSql('DROP TABLE lieu_acceuil');
        $this->addSql('DROP TABLE mission_aceuil');
        $this->addSql('DROP TABLE opportunite_exposant');
        $this->addSql('DROP TABLE partenaire_acceuil');
        $this->addSql('DROP TABLE pays_invite_gala');
        $this->addSql('DROP TABLE pilier_mission_aceuil');
        $this->addSql('DROP TABLE programme_acceuil');
        $this->addSql('DROP TABLE retro_gala');
        $this->addSql('DROP TABLE stats_acceuil');
        $this->addSql('DROP TABLE thematique_acceuil');
        $this->addSql('ALTER TABLE categorie_candidature DROP mini_titre, DROP description, DROP image_name, DROP image_path');
        $this->addSql('ALTER TABLE package_dossier DROP is_popu');
    }
}
