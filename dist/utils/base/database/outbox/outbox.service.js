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
exports.OutboxService = void 0;
const outbox_model_1 = require("./outbox.model");
class OutboxService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    addToOutboxAndSend(domainEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            const outboxEntry = this.entityManager.create(outbox_model_1.OutboxModel, {
                eventName: domainEvent.eventName,
                payload: JSON.stringify(domainEvent),
            });
            yield this.entityManager.persistAndFlush(outboxEntry);
            try {
                yield this.entityManager.removeAndFlush(outboxEntry);
            }
            catch (error) {
                console.error(error);
                yield this.entityManager.removeAndFlush(outboxEntry);
                throw error;
            }
        });
    }
}
exports.OutboxService = OutboxService;
//# sourceMappingURL=outbox.service.js.map