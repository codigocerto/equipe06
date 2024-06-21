import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEtapa1718314170085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS etapa;`);
        await queryRunner.query(`
            CREATE TABLE etapa (
                    id VARCHAR(36) PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    type ENUM('ARTIGO', 'SITE', 'VIDEO') NOT NULL,
                    link VARCHAR(255) NOT NULL,
                    roadmap_id VARCHAR(36) NOT NULL,
                    ordem INT NOT NULL,
                    FOREIGN KEY (roadmap_id) REFERENCES roadmap(id)
            );

        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE etapa
        `);
    }

}
