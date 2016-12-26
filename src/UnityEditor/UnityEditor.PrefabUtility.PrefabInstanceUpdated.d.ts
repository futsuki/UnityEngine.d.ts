declare namespace UnityEditor.PrefabUtility {
  class PrefabInstanceUpdated {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(instance: any): void;
    BeginInvoke(instance: any, callback: any, object: any): any;
    EndInvoke(result: any): void;
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
