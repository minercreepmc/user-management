"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikroOrmUnitOfWork = void 0;
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const outbox_1 = require("../outbox");
let MikroOrmUnitOfWork = class MikroOrmUnitOfWork {
    constructor(entityManager, outBoxService) {
        this.entityManager = entityManager;
        this.outBoxService = outBoxService;
    }
    startTransaction() {
        return this.entityManager.begin();
    }
    commitTransaction() {
        return this.entityManager.commit();
    }
    rollbackTransaction() {
        return this.entityManager.rollback();
    }
    runInTransaction(fn) {
        return this.entityManager.transactional(() => {
            return fn(this.outBoxService);
        });
    }
};
MikroOrmUnitOfWork = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager,
        outbox_1.OutboxService])
], MikroOrmUnitOfWork);
exports.MikroOrmUnitOfWork = MikroOrmUnitOfWork;
//# sourceMappingURL=mikroorm-unit-of-work.js.map