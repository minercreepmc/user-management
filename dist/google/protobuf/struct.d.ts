import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "google.protobuf";
export declare enum NullValue {
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
export interface Struct {
    fields: {
        [key: string]: any | undefined;
    };
}
export interface Struct_FieldsEntry {
    key: string;
    value: any | undefined;
}
export interface Value {
    nullValue?: NullValue | undefined;
    numberValue?: number | undefined;
    stringValue?: string | undefined;
    boolValue?: boolean | undefined;
    structValue?: {
        [key: string]: any;
    } | undefined;
    listValue?: Array<any> | undefined;
}
export interface ListValue {
    values: any[];
}
export declare const Struct: {
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    create<I extends {
        fields?: {
            [x: string]: any;
        };
    } & {
        fields?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["fields"], string | number>]: never; };
    } & { [K_1 in Exclude<keyof I, "fields">]: never; }>(base?: I): Struct;
    fromPartial<I_1 extends {
        fields?: {
            [x: string]: any;
        };
    } & {
        fields?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["fields"], string | number>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "fields">]: never; }>(object: I_1): Struct;
    wrap(object: {
        [key: string]: any;
    }): Struct;
    unwrap(message: Struct): {
        [key: string]: any;
    };
};
export declare const Struct_FieldsEntry: {
    encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
    create<I extends {
        key?: string;
        value?: any | undefined;
    } & {
        key?: string;
        value?: any | undefined;
    } & { [K in Exclude<keyof I, keyof Struct_FieldsEntry>]: never; }>(base?: I): Struct_FieldsEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: any | undefined;
    } & {
        key?: string;
        value?: any | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Struct_FieldsEntry>]: never; }>(object: I_1): Struct_FieldsEntry;
};
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    create<I extends {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        };
        listValue?: any[];
    } & {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["structValue"], string | number>]: never; };
        listValue?: any[] & any[] & { [K_1 in Exclude<keyof I["listValue"], keyof any[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Value>]: never; }>(base?: I): Value;
    fromPartial<I_1 extends {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        };
        listValue?: any[];
    } & {
        nullValue?: NullValue | undefined;
        numberValue?: number | undefined;
        stringValue?: string | undefined;
        boolValue?: boolean | undefined;
        structValue?: {
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_3 in Exclude<keyof I_1["structValue"], string | number>]: never; };
        listValue?: any[] & any[] & { [K_4 in Exclude<keyof I_1["listValue"], keyof any[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Value>]: never; }>(object: I_1): Value;
    wrap(value: any): Value;
    unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    create<I extends {
        values?: any[];
    } & {
        values?: any[] & any[] & { [K in Exclude<keyof I["values"], keyof any[]>]: never; };
    } & { [K_1 in Exclude<keyof I, "values">]: never; }>(base?: I): ListValue;
    fromPartial<I_1 extends {
        values?: any[];
    } & {
        values?: any[] & any[] & { [K_2 in Exclude<keyof I_1["values"], keyof any[]>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "values">]: never; }>(object: I_1): ListValue;
    wrap(array: Array<any> | undefined): ListValue;
    unwrap(message: ListValue): Array<any>;
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
