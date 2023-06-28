import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface Message {
    header: Message_Header | undefined;
    content: {
        [key: string]: any;
    } | undefined;
}
export interface Message_Header {
    messageType: string;
    source: string;
    destination: string;
    timestamp: Date | undefined;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create<I extends {
        header?: {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        };
        content?: {
            [x: string]: any;
        };
    } & {
        header?: {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        } & {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        } & { [K in Exclude<keyof I["header"], keyof Message_Header>]: never; };
        content?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_1 in Exclude<keyof I["content"], string | number>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Message>]: never; }>(base?: I): Message;
    fromPartial<I_1 extends {
        header?: {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        };
        content?: {
            [x: string]: any;
        };
    } & {
        header?: {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        } & {
            messageType?: string;
            source?: string;
            destination?: string;
            timestamp?: Date | undefined;
        } & { [K_3 in Exclude<keyof I_1["header"], keyof Message_Header>]: never; };
        content?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_4 in Exclude<keyof I_1["content"], string | number>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Message>]: never; }>(object: I_1): Message;
};
export declare const Message_Header: {
    encode(message: Message_Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message_Header;
    fromJSON(object: any): Message_Header;
    toJSON(message: Message_Header): unknown;
    create<I extends {
        messageType?: string;
        source?: string;
        destination?: string;
        timestamp?: Date | undefined;
    } & {
        messageType?: string;
        source?: string;
        destination?: string;
        timestamp?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof Message_Header>]: never; }>(base?: I): Message_Header;
    fromPartial<I_1 extends {
        messageType?: string;
        source?: string;
        destination?: string;
        timestamp?: Date | undefined;
    } & {
        messageType?: string;
        source?: string;
        destination?: string;
        timestamp?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Message_Header>]: never; }>(object: I_1): Message_Header;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
