declare namespace UnityEditorInternal {
  class JSONValue extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    IsString(): boolean;
    IsFloat(): boolean;
    IsList(): boolean;
    IsDict(): boolean;
    IsBool(): boolean;
    IsNull(): boolean;
    AsObject(): any;
    AsString(nothrow: boolean): string;
    AsString(): string;
    AsFloat(nothrow: boolean): number;
    AsFloat(): number;
    AsBool(nothrow: boolean): boolean;
    AsBool(): boolean;
    AsList(nothrow: boolean): UnityEditorInternal.JSONValue[];
    AsList(): UnityEditorInternal.JSONValue[];
    AsDict(nothrow: boolean): any;
    AsDict(): any;
    static NewString(val: string): UnityEditorInternal.JSONValue;
    static NewFloat(val: number): UnityEditorInternal.JSONValue;
    static NewDict(): UnityEditorInternal.JSONValue;
    static NewList(): UnityEditorInternal.JSONValue;
    static NewBool(val: boolean): UnityEditorInternal.JSONValue;
    static NewNull(): UnityEditorInternal.JSONValue;
    ContainsKey(index: string): boolean;
    Get(key: string): UnityEditorInternal.JSONValue;
    Set(key: string, value: string): void;
    Set(key: string, value: number): void;
    Set(key: string, value: boolean): void;
    Add(value: string): void;
    Add(value: number): void;
    Add(value: boolean): void;
    ToString(): string;
    // properties
    get_Item(index: string): UnityEditorInternal.JSONValue;
    set_Item(index: string, value: UnityEditorInternal.JSONValue): void;
    // fields
  }
}
