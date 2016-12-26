declare namespace UnityEditor {
  class GizmoInfo {
    // constructors
    constructor();
    // methods
    Update(point1: any, point2: any): void;
    Update(center: any, length: number, angle: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly point1: any;
    readonly point2: any;
    readonly center: any;
    readonly angle: number;
    readonly length: number;
    readonly plane: any;
    readonly planeOrtho: any;
    // fields
  }
}
