declare namespace UnityEditor.AudioCurveRendering {
  class AudioCurveAndColorEvaluator {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(x: number, col: any): number;
    BeginInvoke(x: number, col: any, callback: any, object: any): any;
    EndInvoke(col: any, result: any): number;
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
