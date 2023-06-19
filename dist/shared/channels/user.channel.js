"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChannel = exports.protobufPackage = void 0;
const _m0 = require("protobufjs/minimal");
exports.protobufPackage = "";
function createBaseUserChannel() {
    return {};
}
exports.UserChannel = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.UserChannel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseUserChannel();
        return message;
    },
};
//# sourceMappingURL=user.channel.js.map