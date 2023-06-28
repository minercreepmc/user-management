"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeBusinessRulesEnforcer = exports.BusinessRulesEnforcer = void 0;
class BusinessRulesEnforcer {
    constructor() {
        this.exceptions = [];
    }
    addException(...exceptions) {
        this.exceptions.push(...exceptions);
    }
    getExceptions() {
        return this.exceptions;
    }
    clear() {
        this.exceptions = [];
    }
}
exports.BusinessRulesEnforcer = BusinessRulesEnforcer;
class CompositeBusinessRulesEnforcer extends BusinessRulesEnforcer {
    constructor() {
        super(...arguments);
        this.enforcers = [];
    }
    addEnforcer(enforcer) {
        this.enforcers.push(enforcer);
    }
    getExceptions() {
        let exceptions = super.getExceptions();
        for (const enforcer of this.enforcers) {
            exceptions = [...exceptions, ...enforcer.getExceptions()];
        }
        return exceptions;
    }
    clear() {
        for (const enforcer of this.enforcers) {
            enforcer.clear();
        }
    }
}
exports.CompositeBusinessRulesEnforcer = CompositeBusinessRulesEnforcer;
//# sourceMappingURL=business-rules-enforcer.base.js.map