import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface V1RegisterMemberRequestDto {
    username: string;
    email: string;
    password: string;
}
export interface V1RegisterMemberResponseDto {
    username: string;
    email: string;
}
export interface V1RegisterMemberPattern {
}
export declare const V1RegisterMemberRequestDto: {
    encode(message: V1RegisterMemberRequestDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): V1RegisterMemberRequestDto;
    fromJSON(object: any): V1RegisterMemberRequestDto;
    toJSON(message: V1RegisterMemberRequestDto): unknown;
    create<I extends {
        username?: string;
        email?: string;
        password?: string;
    } & {
        username?: string;
        email?: string;
        password?: string;
    } & { [K in Exclude<keyof I, keyof V1RegisterMemberRequestDto>]: never; }>(base?: I): V1RegisterMemberRequestDto;
    fromPartial<I_1 extends {
        username?: string;
        email?: string;
        password?: string;
    } & {
        username?: string;
        email?: string;
        password?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof V1RegisterMemberRequestDto>]: never; }>(object: I_1): V1RegisterMemberRequestDto;
};
export declare const V1RegisterMemberResponseDto: {
    encode(message: V1RegisterMemberResponseDto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): V1RegisterMemberResponseDto;
    fromJSON(object: any): V1RegisterMemberResponseDto;
    toJSON(message: V1RegisterMemberResponseDto): unknown;
    create<I extends {
        username?: string;
        email?: string;
    } & {
        username?: string;
        email?: string;
    } & { [K in Exclude<keyof I, keyof V1RegisterMemberResponseDto>]: never; }>(base?: I): V1RegisterMemberResponseDto;
    fromPartial<I_1 extends {
        username?: string;
        email?: string;
    } & {
        username?: string;
        email?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof V1RegisterMemberResponseDto>]: never; }>(object: I_1): V1RegisterMemberResponseDto;
};
export declare const V1RegisterMemberPattern: {
    encode(_: V1RegisterMemberPattern, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): V1RegisterMemberPattern;
    fromJSON(_: any): V1RegisterMemberPattern;
    toJSON(_: V1RegisterMemberPattern): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): V1RegisterMemberPattern;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): V1RegisterMemberPattern;
};
export interface V1UserServiceInterface {
    registerMember(request: V1RegisterMemberRequestDto): Promise<V1RegisterMemberResponseDto>;
}
export declare class V1UserServiceInterfaceClientImpl implements V1UserServiceInterface {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    registerMember(request: V1RegisterMemberRequestDto): Promise<V1RegisterMemberResponseDto>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
