declare namespace UnityEditorInternal.ReorderableList {
  class ElementCallbackDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(rect: any, index: number, isActive: boolean, isFocused: boolean): void;
    BeginInvoke(rect: any, index: number, isActive: boolean, isFocused: boolean, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
