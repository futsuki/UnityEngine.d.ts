declare namespace UnityEditor {
  class PointEditor {
    // constructors
    constructor();
    // methods
    static MovePoints(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: any): boolean;
    static FindNearest(point: any, cloudTransform: any, points: UnityEditor.IEditablePoint): number;
    static SelectPoints(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: any, firstSelect: boolean): boolean;
    static Draw(points: UnityEditor.IEditablePoint, cloudTransform: any, selection: any, twoPassDrawing: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
