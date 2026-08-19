import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsersTable1787142977576 implements MigrationInterface {
    name = 'AddUsersTable1787142977576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userId" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "passwordHash" varchar NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"))`);
        await queryRunner.query(`CREATE TABLE "temporary_comments" ("id" varchar PRIMARY KEY NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "threadId" varchar, CONSTRAINT "FK_f682eb665c360168731f596b0e3" FOREIGN KEY ("threadId") REFERENCES "threads" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_comments"("id", "body", "author", "createdAt", "threadId") SELECT "id", "body", "author", "createdAt", "threadId" FROM "comments"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`ALTER TABLE "temporary_comments" RENAME TO "comments"`);
        await queryRunner.query(`CREATE TABLE "temporary_threads" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar(150) NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`INSERT INTO "temporary_threads"("id", "title", "body", "author", "createdAt") SELECT "id", "title", "body", "author", "createdAt" FROM "threads"`);
        await queryRunner.query(`DROP TABLE "threads"`);
        await queryRunner.query(`ALTER TABLE "temporary_threads" RENAME TO "threads"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" RENAME TO "temporary_threads"`);
        await queryRunner.query(`CREATE TABLE "threads" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar(150) NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "threads"("id", "title", "body", "author", "createdAt") SELECT "id", "title", "body", "author", "createdAt" FROM "temporary_threads"`);
        await queryRunner.query(`DROP TABLE "temporary_threads"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME TO "temporary_comments"`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" varchar PRIMARY KEY NOT NULL, "body" text NOT NULL, "author" varchar(100) NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "threadId" varchar, CONSTRAINT "FK_f682eb665c360168731f596b0e3" FOREIGN KEY ("threadId") REFERENCES "threads" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "comments"("id", "body", "author", "createdAt", "threadId") SELECT "id", "body", "author", "createdAt", "threadId" FROM "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "temporary_comments"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
