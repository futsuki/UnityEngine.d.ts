declare namespace UnityEditor.EditorUtility {
  class SelectMenuItemFunction {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(userData: any, options: string[], selected: number): any;
    BeginInvoke(userData: any, options: string[], selected: number, callback: any, object: any): any;
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
