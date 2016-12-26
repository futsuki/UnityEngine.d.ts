declare namespace UnityEditorInternal.AnimationWindowPolicy {
  class SynchronizeFrameRateDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(frameRate: any): boolean;
    BeginInvoke(frameRate: any, callback: any, object: any): any;
    EndInvoke(frameRate: any, result: any): boolean;
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
