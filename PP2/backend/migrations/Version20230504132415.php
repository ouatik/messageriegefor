<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230504132415 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        //$this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F3256915B');
        //$this->addSql('ALTER TABLE conversation DROP FOREIGN KEY FK_8A8E26E913713818');
        //$this->addSql('DROP TABLE conversation');
        //$this->addSql('DROP INDEX IDX_B6BD307F3256915B ON message');
       // $this->addSql('ALTER TABLE message ADD sender_id INT NOT NULL, DROP relation_id');
        // $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FF624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307FF624B39D ON message (sender_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE conversation (id INT AUTO_INCREMENT NOT NULL, echange_id INT DEFAULT NULL, INDEX IDX_8A8E26E913713818 (echange_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE conversation ADD CONSTRAINT FK_8A8E26E913713818 FOREIGN KEY (echange_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FF624B39D');
        $this->addSql('DROP INDEX IDX_B6BD307FF624B39D ON message');
        $this->addSql('ALTER TABLE message ADD relation_id INT DEFAULT NULL, DROP sender_id');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F3256915B FOREIGN KEY (relation_id) REFERENCES conversation (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307F3256915B ON message (relation_id)');
    }
}
