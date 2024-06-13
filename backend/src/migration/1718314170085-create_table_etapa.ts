import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEtapa1718314170085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE etapa (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                type ENUM(ARTIGO, SITE, VIDEO),
                link VARCHAR(255) NOT NULL,
                roadmap_id INT NOT NULL,
                ordem INT NOT NULL
                FOREIGN KEY (roadmap_id) REFERENCES roadmap(id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE etapa
        `);
    }

}
