/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "";

export interface MemberRegisteredProtoDetails {
  firstName?: string | undefined;
  lastName?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  role: string;
}

export interface MemberRegisteredProto {
  eventId: string;
  dateOccurred: Date | undefined;
  entityId: string;
  eventName: string;
  fromBoundedContext: string;
  details: MemberRegisteredProtoDetails | undefined;
}

function createBaseMemberRegisteredProtoDetails(): MemberRegisteredProtoDetails {
  return { firstName: undefined, lastName: undefined, username: undefined, email: undefined, role: "" };
}

export const MemberRegisteredProtoDetails = {
  encode(message: MemberRegisteredProtoDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstName !== undefined) {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(18).string(message.lastName);
    }
    if (message.username !== undefined) {
      writer.uint32(26).string(message.username);
    }
    if (message.email !== undefined) {
      writer.uint32(34).string(message.email);
    }
    if (message.role !== "") {
      writer.uint32(42).string(message.role);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberRegisteredProtoDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRegisteredProtoDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.email = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.role = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MemberRegisteredProtoDetails {
    return {
      firstName: isSet(object.firstName) ? String(object.firstName) : undefined,
      lastName: isSet(object.lastName) ? String(object.lastName) : undefined,
      username: isSet(object.username) ? String(object.username) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      role: isSet(object.role) ? String(object.role) : "",
    };
  },

  toJSON(message: MemberRegisteredProtoDetails): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.username !== undefined && (obj.username = message.username);
    message.email !== undefined && (obj.email = message.email);
    message.role !== undefined && (obj.role = message.role);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberRegisteredProtoDetails>, I>>(base?: I): MemberRegisteredProtoDetails {
    return MemberRegisteredProtoDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberRegisteredProtoDetails>, I>>(object: I): MemberRegisteredProtoDetails {
    const message = createBaseMemberRegisteredProtoDetails();
    message.firstName = object.firstName ?? undefined;
    message.lastName = object.lastName ?? undefined;
    message.username = object.username ?? undefined;
    message.email = object.email ?? undefined;
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseMemberRegisteredProto(): MemberRegisteredProto {
  return {
    eventId: "",
    dateOccurred: undefined,
    entityId: "",
    eventName: "",
    fromBoundedContext: "",
    details: undefined,
  };
}

export const MemberRegisteredProto = {
  encode(message: MemberRegisteredProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.dateOccurred !== undefined) {
      Timestamp.encode(toTimestamp(message.dateOccurred), writer.uint32(18).fork()).ldelim();
    }
    if (message.entityId !== "") {
      writer.uint32(26).string(message.entityId);
    }
    if (message.eventName !== "") {
      writer.uint32(34).string(message.eventName);
    }
    if (message.fromBoundedContext !== "") {
      writer.uint32(42).string(message.fromBoundedContext);
    }
    if (message.details !== undefined) {
      MemberRegisteredProtoDetails.encode(message.details, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberRegisteredProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberRegisteredProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dateOccurred = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fromBoundedContext = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.details = MemberRegisteredProtoDetails.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MemberRegisteredProto {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      dateOccurred: isSet(object.dateOccurred) ? fromJsonTimestamp(object.dateOccurred) : undefined,
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      eventName: isSet(object.eventName) ? String(object.eventName) : "",
      fromBoundedContext: isSet(object.fromBoundedContext) ? String(object.fromBoundedContext) : "",
      details: isSet(object.details) ? MemberRegisteredProtoDetails.fromJSON(object.details) : undefined,
    };
  },

  toJSON(message: MemberRegisteredProto): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.dateOccurred !== undefined && (obj.dateOccurred = message.dateOccurred.toISOString());
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.eventName !== undefined && (obj.eventName = message.eventName);
    message.fromBoundedContext !== undefined && (obj.fromBoundedContext = message.fromBoundedContext);
    message.details !== undefined &&
      (obj.details = message.details ? MemberRegisteredProtoDetails.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MemberRegisteredProto>, I>>(base?: I): MemberRegisteredProto {
    return MemberRegisteredProto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MemberRegisteredProto>, I>>(object: I): MemberRegisteredProto {
    const message = createBaseMemberRegisteredProto();
    message.eventId = object.eventId ?? "";
    message.dateOccurred = object.dateOccurred ?? undefined;
    message.entityId = object.entityId ?? "";
    message.eventName = object.eventName ?? "";
    message.fromBoundedContext = object.fromBoundedContext ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? MemberRegisteredProtoDetails.fromPartial(object.details)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
