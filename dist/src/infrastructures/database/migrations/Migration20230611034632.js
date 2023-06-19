"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230611034632 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230611034632 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "users" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "email" varchar(255) null, "first_name" varchar(255) null, "last_name" varchar(255) null, "hashed" varchar(255) not null, "role" varchar(255) not null, constraint "users_pkey" primary key ("id"));');
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('drop table if exists "users" cascade;');
        });
    }
}
exports.Migration20230611034632 = Migration20230611034632;
//# sourceMappingURL=Migration20230611034632.js.map