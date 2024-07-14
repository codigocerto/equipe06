import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEnrollmentUser1720967221725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE enrollment (
                id  VARCHAR(100) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                phone VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                hability VARCHAR(100) NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
