declare namespace SimpleJson.Reflection.ReflectionUtils {
  class SetDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(source: any, value: any): any;
    BeginInvoke(source: any, value: any, callback: any, object: any): any;
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
