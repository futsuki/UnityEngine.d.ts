declare namespace UnityEditor.ShapeEditor {
  class DistanceToControl {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(pos: any, rotation: any, handleSize: number): number;
    BeginInvoke(pos: any, rotation: any, handleSize: number, callback: any, object: any): any;
    EndInvoke(result: any): number;
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
