declare namespace UnityEditor.Handles {
  class CapFunction {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    BeginInvoke(controlID: number, position: any, rotation: any, size: number, eventType: any, callback: any, object: any): any;
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
