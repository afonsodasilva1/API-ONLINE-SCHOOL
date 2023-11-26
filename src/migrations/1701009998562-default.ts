import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1701009998562 implements MigrationInterface {
    name = 'Default1701009998562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "description"`);
    }

}
