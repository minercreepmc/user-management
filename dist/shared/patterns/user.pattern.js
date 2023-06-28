"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1UserPatternToJSON = exports.v1UserPatternFromJSON = exports.V1UserPattern = exports.protobufPackage = void 0;
exports.protobufPackage = "";
var V1UserPattern;
(function (V1UserPattern) {
    V1UserPattern[V1UserPattern["REGISTER_MEMBER"] = 0] = "REGISTER_MEMBER";
    V1UserPattern[V1UserPattern["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(V1UserPattern = exports.V1UserPattern || (exports.V1UserPattern = {}));
function v1UserPatternFromJSON(object) {
    switch (object) {
        case 0:
        case "REGISTER_MEMBER":
            return V1UserPattern.REGISTER_MEMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return V1UserPattern.UNRECOGNIZED;
    }
}
exports.v1UserPatternFromJSON = v1UserPatternFromJSON;
function v1UserPatternToJSON(object) {
    switch (object) {
        case V1UserPattern.REGISTER_MEMBER:
            return "REGISTER_MEMBER";
        case V1UserPattern.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.v1UserPatternToJSON = v1UserPatternToJSON;
//# sourceMappingURL=user.pattern.js.map