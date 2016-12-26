declare namespace UnityEditor.MaterialProperty {
  class ApplyPropertyCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(prop: UnityEditor.MaterialProperty, changeMask: number, previousValue: any): boolean;
    BeginInvoke(prop: UnityEditor.MaterialProperty, changeMask: number, previousValue: any, callback: any, object: any): any;
    EndInvoke(result: any): boolean;
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
