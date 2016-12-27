declare namespace UnityEditor {
  class PointEditor extends System.Object {
    // constructors
    constructor();
    // methods
    static MovePoints(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: number[]): boolean;
    static FindNearest(point: any, cloudTransform: any, points: UnityEditor.IEditablePoint): number;
    static SelectPoints(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: any, firstSelect: boolean): boolean;
    static Draw(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: number[], twoPassDrawing: boolean): void;
    // properties
    // fields
  }
}
