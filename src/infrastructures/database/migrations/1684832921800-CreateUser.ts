import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1684832921800 implements MigrationInterface {
    name = 'CreateUser1684832921800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "username" character varying NOT NULL, "email" character varying, "firstName" character varying, "lastName" character varying, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
