declare namespace UnityEditor.AudioCurveRendering {
  class AudioCurveEvaluator {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(x: number): number;
    BeginInvoke(x: number, callback: any, object: any): any;
    EndInvoke(result: any): number;
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
