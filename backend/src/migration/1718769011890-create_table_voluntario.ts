import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableVoluntario1718769011890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS voluntario;`);
        await queryRunner.query(`
            CREATE TABLE voluntario (
                id  VARCHAR(100) PRIMARY KEY NOT NULL,
                title VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                vacancies INT NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS voluntario
        `);
    }

}
