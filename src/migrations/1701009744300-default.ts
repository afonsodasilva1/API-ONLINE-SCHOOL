import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1701009744300 implements MigrationInterface {
    name = 'Default1701009744300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" ADD "descption" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "descption"`);
    }

}
