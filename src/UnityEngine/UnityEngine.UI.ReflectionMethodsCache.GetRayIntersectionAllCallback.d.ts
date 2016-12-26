declare namespace UnityEngine.UI.ReflectionMethodsCache {
  class GetRayIntersectionAllCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(r: UnityEngine.Ray, f: number, i: number): UnityEngine.RaycastHit2D[];
    BeginInvoke(r: UnityEngine.Ray, f: number, i: number, callback: any, object: any): any;
    EndInvoke(result: any): UnityEngine.RaycastHit2D[];
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
