declare namespace SimpleJson.Reflection.ReflectionUtils {
  class ConstructorDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(args: any[]): any;
    BeginInvoke(args: any[], callback: any, object: any): any;
    EndInvoke(result: any): any;
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
