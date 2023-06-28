"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResponseForCode = void 0;
function checkResponseForCode(options) {
    const { codes, response, statusCode } = options;
    const responseBody = response.body;
    if (responseBody.statusCode !== statusCode) {
        return false;
    }
    if (codes.length === 0) {
        return true;
    }
    return codes.every((targetCode) => responseBody.message.some((msg) => msg.code === targetCode));
}
exports.checkResponseForCode = checkResponseForCode;
//# sourceMappingURL=check-response-for-code.util.js.map