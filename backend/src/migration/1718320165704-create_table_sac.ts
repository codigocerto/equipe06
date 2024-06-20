import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableSac1718320165704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE sac (
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(50) NOT NULL,
                content VARCHAR(255) NOT NULL,
                date DATE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS sac
        `);
    }

}
