"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBase = void 0;
const oxide_ts_1 = require("oxide.ts");
class ProcessBase {
    constructor() {
        this.exceptions = [];
    }
    clearExceptions() {
        this.exceptions = [];
    }
    clearValue() {
        this.value = null;
    }
    getValidationResult() {
        if (this.exceptions.length > 0) {
            return (0, oxide_ts_1.Err)(this.exceptions);
        }
        else {
            return (0, oxide_ts_1.Ok)(this.value);
        }
    }
}
exports.ProcessBase = ProcessBase;
//# sourceMappingURL=process.base.js.map