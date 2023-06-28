"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message_Header = exports.Message = exports.protobufPackage = void 0;
const _m0 = require("protobufjs/minimal");
const struct_1 = require("../../google/protobuf/struct");
const timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "";
function createBaseMessage() {
    return { header: undefined, content: undefined };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            exports.Message_Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.content !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.content), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = exports.Message_Header.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.content = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            header: isSet(object.header) ? exports.Message_Header.fromJSON(object.header) : undefined,
            content: isObject(object.content) ? object.content : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Message_Header.toJSON(message.header) : undefined);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },
    create(base) {
        return exports.Message.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMessage();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Message_Header.fromPartial(object.header)
            : undefined;
        message.content = (_a = object.content) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMessage_Header() {
    return { messageType: "", source: "", destination: "", timestamp: undefined };
}
exports.Message_Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageType !== "") {
            writer.uint32(10).string(message.messageType);
        }
        if (message.source !== "") {
            writer.uint32(18).string(message.source);
        }
        if (message.destination !== "") {
            writer.uint32(26).string(message.destination);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage_Header();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messageType = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.source = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.destination = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            messageType: isSet(object.messageType) ? String(object.messageType) : "",
            source: isSet(object.source) ? String(object.source) : "",
            destination: isSet(object.destination) ? String(object.destination) : "",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.messageType !== undefined && (obj.messageType = message.messageType);
        message.source !== undefined && (obj.source = message.source);
        message.destination !== undefined && (obj.destination = message.destination);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    create(base) {
        return exports.Message_Header.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMessage_Header();
        message.messageType = (_a = object.messageType) !== null && _a !== void 0 ? _a : "";
        message.source = (_b = object.source) !== null && _b !== void 0 ? _b : "";
        message.destination = (_c = object.destination) !== null && _c !== void 0 ? _c : "";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=message.interface.js.map