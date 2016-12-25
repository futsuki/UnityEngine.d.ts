declare namespace UnityEditorInternal.ReorderableList {
  class AddDropdownCallbackDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(buttonRect: any, list: UnityEditorInternal.ReorderableList): any;
    BeginInvoke(buttonRect: any, list: UnityEditorInternal.ReorderableList, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
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
