declare namespace UnityEditor {
  class ShapeEditor {
    // constructors
    constructor();
    // methods
    OnGUI(): void;
    Edges(): void;
    Tangents(): void;
    Points(): void;
    HandlePointInsertToEdge(closestEdge: number, closestEdgeDist: number): void;
    HandlePointClick(pointIndex: number): void;
    CycleTangentMode(): void;
    static GetNextTangentMode(current: UnityEditor.ShapeEditor.TangentMode): UnityEditor.ShapeEditor.TangentMode;
    RefreshTangentsAfterModeChange(pointIndex: number, oldMode: UnityEditor.ShapeEditor.TangentMode, newMode: UnityEditor.ShapeEditor.TangentMode): void;
    FindClosestPointOnEdge(edgeIndex: number, position: any, iterations: number): any;
    static RectCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static CircleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static DiamondCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
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
