import { MigrationInterface, QueryRunner } from "typeorm";

export class RenamePasswordToHashed1685017791850 implements MigrationInterface {
    name = 'RenamePasswordToHashed1685017791850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "password" TO "hashed"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "hashed" TO "password"`);
    }

}
