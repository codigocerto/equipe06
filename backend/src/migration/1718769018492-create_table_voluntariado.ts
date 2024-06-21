import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableVoluntariado1718769018492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS voluntariado;`);
        await queryRunner.query(`
            CREATE TABLE voluntariado (
                id  VARCHAR(100) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                phone VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                vaga_id VARCHAR(100) NOT NULL,

                FOREIGN KEY (vaga_id) REFERENCES voluntario(id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS voluntariado
        `);
    }
}
