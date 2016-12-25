declare namespace UnityEditor {
  class ShapeEditor {
    // constructors
    constructor();
    // methods
    OnGUI(): any;
    Edges(): any;
    Tangents(): any;
    Points(): any;
    HandlePointInsertToEdge(closestEdge: number, closestEdgeDist: number): any;
    HandlePointClick(pointIndex: number): any;
    CycleTangentMode(): any;
    static GetNextTangentMode(current: UnityEditor.ShapeEditor.TangentMode): UnityEditor.ShapeEditor.TangentMode;
    RefreshTangentsAfterModeChange(pointIndex: number, oldMode: UnityEditor.ShapeEditor.TangentMode, newMode: UnityEditor.ShapeEditor.TangentMode): any;
    FindClosestPointOnEdge(edgeIndex: number, position: any, iterations: number): any;
    static RectCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static CircleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static DiamondCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    lineTexture: any;
    activePoint: number;
    readonly selectedPoints: any;
    inEditMode: boolean;
    activeEdge: number;
    // fields
    GetPointPosition: any;
    SetPointPosition: any;
    GetPointLTangent: any;
    SetPointLTangent: any;
    GetPointRTangent: any;
    SetPointRTangent: any;
    GetTangentMode: any;
    SetTangentMode: any;
    InsertPointAt: any;
    RemovePointAt: any;
    GetPointsCount: any;
    ScreenToLocal: any;
    LocalToScreen: any;
    LocalToWorldMatrix: any;
    DistanceToRectangle: any;
    DistanceToDiamond: any;
    DistanceToCircle: any;
    Repaint: any;
    RecordUndo: any;
    Snap: any;
    Frame: any;
    OnPointClick: any;
    OpenEnded: any;
    GetHandleSize: any;
  }
}
