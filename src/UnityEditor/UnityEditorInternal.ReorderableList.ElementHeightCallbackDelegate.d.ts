declare namespace UnityEditorInternal.ReorderableList {
  class ElementHeightCallbackDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(index: number): number;
    BeginInvoke(index: number, callback: any, object: any): any;
    EndInvoke(result: any): number;
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
