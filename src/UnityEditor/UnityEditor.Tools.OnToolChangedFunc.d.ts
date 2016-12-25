declare namespace UnityEditor.Tools {
  class OnToolChangedFunc {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(from: UnityEditor.Tool, to: UnityEditor.Tool): any;
    BeginInvoke(from: UnityEditor.Tool, to: UnityEditor.Tool, callback: any, object: any): any;
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
