declare namespace UnityEngine.UI.ReflectionMethodsCache {
  class Raycast3DCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(r: UnityEngine.Ray, hit: any, f: number, i: number): boolean;
    BeginInvoke(r: UnityEngine.Ray, hit: any, f: number, i: number, callback: any, object: any): any;
    EndInvoke(hit: any, result: any): boolean;
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
