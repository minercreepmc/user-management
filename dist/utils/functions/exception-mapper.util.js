"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDomainExceptionsToObjects = void 0;
const mapDomainExceptionsToObjects = (errors) => {
    return errors.map((error) => ({
        code: error.code,
        message: error.message,
    }));
};
exports.mapDomainExceptionsToObjects = mapDomainExceptionsToObjects;
//# sourceMappingURL=exception-mapper.util.js.map