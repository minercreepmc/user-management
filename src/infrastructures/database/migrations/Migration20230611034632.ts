import { Migration } from '@mikro-orm/migrations';

export class Migration20230611034632 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "email" varchar(255) null, "first_name" varchar(255) null, "last_name" varchar(255) null, "hashed" varchar(255) not null, "role" varchar(255) not null, constraint "users_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "users" cascade;');
  }

}
