"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1UserServiceInterfaceClientImpl = exports.V1RegisterMemberPattern = exports.V1RegisterMemberResponseDto = exports.V1RegisterMemberRequestDto = exports.protobufPackage = void 0;
const _m0 = require("protobufjs/minimal");
exports.protobufPackage = "";
function createBaseV1RegisterMemberRequestDto() {
    return { username: "", email: "", password: "" };
}
exports.V1RegisterMemberRequestDto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseV1RegisterMemberRequestDto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            username: isSet(object.username) ? String(object.username) : "",
            email: isSet(object.email) ? String(object.email) : "",
            password: isSet(object.password) ? String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.email !== undefined && (obj.email = message.email);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    create(base) {
        return exports.V1RegisterMemberRequestDto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseV1RegisterMemberRequestDto();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseV1RegisterMemberResponseDto() {
    return { username: "", email: "" };
}
exports.V1RegisterMemberResponseDto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseV1RegisterMemberResponseDto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            username: isSet(object.username) ? String(object.username) : "",
            email: isSet(object.email) ? String(object.email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    create(base) {
        return exports.V1RegisterMemberResponseDto.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseV1RegisterMemberResponseDto();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseV1RegisterMemberPattern() {
    return {};
}
exports.V1RegisterMemberPattern = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseV1RegisterMemberPattern();
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
        return exports.V1RegisterMemberPattern.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseV1RegisterMemberPattern();
        return message;
    },
};
class V1UserServiceInterfaceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "V1UserServiceInterface";
        this.rpc = rpc;
        this.registerMember = this.registerMember.bind(this);
    }
    registerMember(request) {
        const data = exports.V1RegisterMemberRequestDto.encode(request).finish();
        const promise = this.rpc.request(this.service, "registerMember", data);
        return promise.then((data) => exports.V1RegisterMemberResponseDto.decode(_m0.Reader.create(data)));
    }
}
exports.V1UserServiceInterfaceClientImpl = V1UserServiceInterfaceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=register-member.interface.js.map