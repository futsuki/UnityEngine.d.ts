declare namespace UnityEditorInternal.AnimationWindowPolicy {
  class SynchronizeCurrentTimeDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(time: any): boolean;
    BeginInvoke(time: any, callback: any, object: any): any;
    EndInvoke(time: any, result: any): boolean;
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
