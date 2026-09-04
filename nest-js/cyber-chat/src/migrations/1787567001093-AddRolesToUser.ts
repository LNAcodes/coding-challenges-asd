import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRolesToUser1787567001093 implements MigrationInterface {
  name = 'AddRolesToUser1787567001093';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_users" ("userId" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "passwordHash" varchar NOT NULL, "roles" text NOT NULL DEFAULT ('user'), "jwtSalt" varchar NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_users"("userId", "username", "passwordHash", "jwtSalt") SELECT "userId", "username", "passwordHash", 'legacy-salt' FROM "users"`,
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
    await queryRunner.query(
      `CREATE TABLE "users" ("userId" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "passwordHash" varchar NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"))`,
    );
    await queryRunner.query(
      `INSERT INTO "users"("userId", "username", "passwordHash") SELECT "userId", "username", "passwordHash" FROM "temporary_users"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_users"`);
  }
}
