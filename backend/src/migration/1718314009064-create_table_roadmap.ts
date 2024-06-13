import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableRoadmap1718314009064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE roadmap (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                stack ENUM('frontend', 'backend', 'mobile', 'devops') NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE roadmap
        `);
    }

}
