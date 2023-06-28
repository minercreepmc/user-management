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
exports.ProcessBase = void 0;
const oxide_ts_1 = require("oxide.ts");
class ProcessBase {
    constructor(options) {
        this.exceptions = [];
        this.businessEnforcer = options === null || options === void 0 ? void 0 : options.businessEnforcer;
        this.compositeBusinessEnforcer = options === null || options === void 0 ? void 0 : options.compositeBusinessEnforcer;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            this.init();
            yield this.enforceBusinessRules(command);
            this.gatherExceptionsFromBusinessEnforcers();
            yield this.executeMainTaskIfNoException(command);
            return this.getProcessResult();
        });
    }
    gatherExceptionsFromBusinessEnforcers() {
        if (this.businessEnforcer) {
            this.exceptions.push(...this.businessEnforcer.getExceptions());
        }
        if (this.compositeBusinessEnforcer) {
            this.exceptions.push(...this.compositeBusinessEnforcer.getExceptions());
        }
    }
    getEnforcer() {
        if (this.compositeBusinessEnforcer) {
            return this.compositeBusinessEnforcer;
        }
        return this.businessEnforcer;
    }
    executeMainTaskIfNoException(command) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasNoExceptions()) {
                const result = yield this.executeMainTask(command);
                this.value = result;
            }
        });
    }
    getProcessResult() {
        return this.hasNoExceptions() ? (0, oxide_ts_1.Ok)(this.value) : (0, oxide_ts_1.Err)(this.exceptions);
    }
    init() {
        this.clearExceptions();
        this.clearValue();
        this.clearExceptionsInEnforcers();
    }
    clearExceptions() {
        this.exceptions = [];
    }
    clearExceptionsInEnforcers() {
        if (this.businessEnforcer) {
            this.businessEnforcer.clear();
        }
        if (this.compositeBusinessEnforcer) {
            this.compositeBusinessEnforcer.clear();
        }
    }
    clearValue() {
        this.value = null;
    }
    hasNoExceptions() {
        return this.exceptions.length === 0;
    }
}
exports.ProcessBase = ProcessBase;
//# sourceMappingURL=process.base.js.map