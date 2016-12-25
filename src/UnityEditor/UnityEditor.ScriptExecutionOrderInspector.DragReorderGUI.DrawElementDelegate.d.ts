declare namespace UnityEditor.ScriptExecutionOrderInspector.DragReorderGUI {
  class DrawElementDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(r: any, obj: any, dragging: boolean): any;
    BeginInvoke(r: any, obj: any, dragging: boolean, callback: any, object: any): any;
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
