declare namespace UnityEditor {
  class GizmoInfo extends System.Object {
    // constructors
    constructor();
    // methods
    Update(point1: any, point2: any): void;
    Update(center: any, length: number, angle: number): void;
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
