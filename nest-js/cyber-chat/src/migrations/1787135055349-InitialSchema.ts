import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1787135055349 implements MigrationInterface {
    name = 'InitialSchema1787135055349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" varchar PRIMARY KEY NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "threadId" varchar)`);
        await queryRunner.query(`CREATE TABLE "threads" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar(150) NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_comments" ("id" varchar PRIMARY KEY NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "threadId" varchar, CONSTRAINT "FK_f682eb665c360168731f596b0e3" FOREIGN KEY ("threadId") REFERENCES "threads" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_comments"("id", "body", "author", "createdAt", "threadId") SELECT "id", "body", "author", "createdAt", "threadId" FROM "comments"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`ALTER TABLE "temporary_comments" RENAME TO "comments"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" RENAME TO "temporary_comments"`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" varchar PRIMARY KEY NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "threadId" varchar)`);
        await queryRunner.query(`INSERT INTO "comments"("id", "body", "author", "createdAt", "threadId") SELECT "id", "body", "author", "createdAt", "threadId" FROM "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "threads"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
