"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcResult = void 0;
const microservices_1 = require("@nestjs/microservices");
class RpcResult extends microservices_1.RpcException {
    constructor(result) {
        super(result);
        this.result = result;
    }
    getResult() {
        return this.result;
    }
}
exports.RpcResult = RpcResult;
//# sourceMappingURL=rpc.result.js.map