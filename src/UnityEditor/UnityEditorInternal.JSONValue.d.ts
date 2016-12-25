declare namespace UnityEditorInternal {
  class JSONValue {
    // constructors
    private constructor();
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
    AsList(nothrow: boolean): any;
    AsList(): any;
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
    Set(key: string, value: string): any;
    Set(key: string, value: number): any;
    Set(key: string, value: boolean): any;
    Add(value: string): any;
    Add(value: number): any;
    Add(value: boolean): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    get_Item(index: string): UnityEditorInternal.JSONValue;
    set_Item(index: string, value: UnityEditorInternal.JSONValue): any;
    // fields
  }
}
