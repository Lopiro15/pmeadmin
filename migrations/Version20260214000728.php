<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260214000728 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE candidature (id INT AUTO_INCREMENT NOT NULL, nom_entreprise VARCHAR(255) NOT NULL, statut_entreprise VARCHAR(255) NOT NULL, date_creation DATE NOT NULL, num_rccm VARCHAR(255) NOT NULL, num_cc VARCHAR(255) NOT NULL, adresse_siege VARCHAR(255) NOT NULL, ville VARCHAR(255) NOT NULL, pays VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, site_web VARCHAR(255) DEFAULT NULL, fullname_representant VARCHAR(255) NOT NULL, fonction_representant VARCHAR(255) NOT NULL, date_naiss_reresentant DATE NOT NULL, genre_representant VARCHAR(255) NOT NULL, pays_representant VARCHAR(255) NOT NULL, secteur_activite VARCHAR(255) NOT NULL, parcours LONGTEXT DEFAULT NULL, effectif INT NOT NULL, ca2022 NUMERIC(12, 3) DEFAULT NULL, ca2023 NUMERIC(12, 3) NOT NULL, ca2024 NUMERIC(12, 3) NOT NULL, produits LONGTEXT NOT NULL, realisation LONGTEXT DEFAULT NULL, impact LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE candidature_categorie_candidature (candidature_id INT NOT NULL, categorie_candidature_id INT NOT NULL, INDEX IDX_D126AB9FB6121583 (candidature_id), INDEX IDX_D126AB9F201872EC (categorie_candidature_id), PRIMARY KEY(candidature_id, categorie_candidature_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_candidature (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_dossier (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE dossier (id INT AUTO_INCREMENT NOT NULL, categorie_id INT DEFAULT NULL, type_id INT DEFAULT NULL, package_id INT DEFAULT NULL, nom_entreprise VARCHAR(255) NOT NULL, statut_entreprise VARCHAR(255) NOT NULL, date_creation DATE NOT NULL, num_rccm VARCHAR(255) NOT NULL, num_cc VARCHAR(255) NOT NULL, ville_pays VARCHAR(255) NOT NULL, siteweb VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, nom_rep VARCHAR(255) NOT NULL, fonction_rep VARCHAR(255) NOT NULL, raison LONGTEXT NOT NULL, objectif LONGTEXT NOT NULL, communication LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_3D48E037BCF5E72D (categorie_id), INDEX IDX_3D48E037C54C8C93 (type_id), INDEX IDX_3D48E037F44CABFF (package_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE exposant (id INT AUTO_INCREMENT NOT NULL, pack_id INT DEFAULT NULL, fullname VARCHAR(255) NOT NULL, entreprise VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, type_prod VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_AE675FCE1919B217 (pack_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE justificatif_candidature (id INT AUTO_INCREMENT NOT NULL, candidature_id INT DEFAULT NULL, file_name VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_4A7DEF6DB6121583 (candidature_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pack_exposant (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, svg LONGTEXT NOT NULL, montant NUMERIC(12, 3) NOT NULL, avantage JSON NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE package_dossier (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, tarif NUMERIC(12, 3) NOT NULL, avantage JSON NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, type_ticket_id INT DEFAULT NULL, fullname VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, fonction VARCHAR(255) NOT NULL, quantity INT NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_42C84955C4C606C2 (type_ticket_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_dossier (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_ticket (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) NOT NULL, svg LONGTEXT DEFAULT NULL, tarif NUMERIC(12, 3) NOT NULL, avantage JSON NOT NULL, created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE candidature_categorie_candidature ADD CONSTRAINT FK_D126AB9FB6121583 FOREIGN KEY (candidature_id) REFERENCES candidature (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE candidature_categorie_candidature ADD CONSTRAINT FK_D126AB9F201872EC FOREIGN KEY (categorie_candidature_id) REFERENCES categorie_candidature (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E037BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie_dossier (id)');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E037C54C8C93 FOREIGN KEY (type_id) REFERENCES type_dossier (id)');
        $this->addSql('ALTER TABLE dossier ADD CONSTRAINT FK_3D48E037F44CABFF FOREIGN KEY (package_id) REFERENCES package_dossier (id)');
        $this->addSql('ALTER TABLE exposant ADD CONSTRAINT FK_AE675FCE1919B217 FOREIGN KEY (pack_id) REFERENCES pack_exposant (id)');
        $this->addSql('ALTER TABLE justificatif_candidature ADD CONSTRAINT FK_4A7DEF6DB6121583 FOREIGN KEY (candidature_id) REFERENCES candidature (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955C4C606C2 FOREIGN KEY (type_ticket_id) REFERENCES type_ticket (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE candidature_categorie_candidature DROP FOREIGN KEY FK_D126AB9FB6121583');
        $this->addSql('ALTER TABLE candidature_categorie_candidature DROP FOREIGN KEY FK_D126AB9F201872EC');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E037BCF5E72D');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E037C54C8C93');
        $this->addSql('ALTER TABLE dossier DROP FOREIGN KEY FK_3D48E037F44CABFF');
        $this->addSql('ALTER TABLE exposant DROP FOREIGN KEY FK_AE675FCE1919B217');
        $this->addSql('ALTER TABLE justificatif_candidature DROP FOREIGN KEY FK_4A7DEF6DB6121583');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955C4C606C2');
        $this->addSql('DROP TABLE candidature');
        $this->addSql('DROP TABLE candidature_categorie_candidature');
        $this->addSql('DROP TABLE categorie_candidature');
        $this->addSql('DROP TABLE categorie_dossier');
        $this->addSql('DROP TABLE dossier');
        $this->addSql('DROP TABLE exposant');
        $this->addSql('DROP TABLE justificatif_candidature');
        $this->addSql('DROP TABLE pack_exposant');
        $this->addSql('DROP TABLE package_dossier');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE type_dossier');
        $this->addSql('DROP TABLE type_ticket');
    }
}
