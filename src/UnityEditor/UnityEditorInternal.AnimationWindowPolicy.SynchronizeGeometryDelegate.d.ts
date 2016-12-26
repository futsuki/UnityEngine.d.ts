declare namespace UnityEditorInternal.AnimationWindowPolicy {
  class SynchronizeGeometryDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(sizes: any, minSizes: any): boolean;
    BeginInvoke(sizes: any, minSizes: any, callback: any, object: any): any;
    EndInvoke(sizes: any, minSizes: any, result: any): boolean;
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
