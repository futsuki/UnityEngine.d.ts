declare namespace UnityEditor {
  class PolygonEditor extends System.Object {
    // constructors
    constructor();
    // methods
    static StartEditing(collider: any): void;
    static ApplyEditing(collider: any): void;
    static StopEditing(): void;
    static GetNearestPoint(point: any, pathIndex: any, pointIndex: any, distance: any): boolean;
    static GetNearestEdge(point: any, pathIndex: any, pointIndex0: any, pointIndex1: any, distance: any, loop: boolean): boolean;
    static GetPathCount(): number;
    static GetPointCount(pathIndex: number): number;
    static GetPoint(pathIndex: number, pointIndex: number, point: any): boolean;
    static SetPoint(pathIndex: number, pointIndex: number, value: any): void;
    static InsertPoint(pathIndex: number, pointIndex: number, value: any): void;
    static RemovePoint(pathIndex: number, pointIndex: number): void;
    static TestPointMove(pathIndex: number, pointIndex: number, movePosition: any, leftIntersect: any, rightIntersect: any, loop: boolean): void;
    // properties
    // fields
  }
}
