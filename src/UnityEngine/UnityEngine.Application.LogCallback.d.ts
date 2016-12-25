declare namespace UnityEngine.Application {
  class LogCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(condition: string, stackTrace: string, type: UnityEngine.LogType): any;
    BeginInvoke(condition: string, stackTrace: string, type: UnityEngine.LogType, callback: any, object: any): any;
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
