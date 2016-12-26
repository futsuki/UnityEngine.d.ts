declare namespace UnityEditorInternal.ReorderableList {
  class CanRemoveCallbackDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(list: UnityEditorInternal.ReorderableList): boolean;
    BeginInvoke(list: UnityEditorInternal.ReorderableList, callback: any, object: any): any;
    EndInvoke(result: any): boolean;
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
