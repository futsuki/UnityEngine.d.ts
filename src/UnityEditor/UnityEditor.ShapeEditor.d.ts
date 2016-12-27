declare namespace UnityEditor {
  class ShapeEditor extends System.Object {
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
    // properties
    lineTexture: any;
    activePoint: number;
    readonly selectedPoints: any;
    inEditMode: boolean;
    activeEdge: number;
    // fields
    GetPointPosition: ((arg1: number) => any);
    SetPointPosition: ((arg1: number, arg2: any) => void);
    GetPointLTangent: ((arg1: number) => any);
    SetPointLTangent: ((arg1: number, arg2: any) => void);
    GetPointRTangent: ((arg1: number) => any);
    SetPointRTangent: ((arg1: number, arg2: any) => void);
    GetTangentMode: ((arg1: number) => UnityEditor.ShapeEditor.TangentMode);
    SetTangentMode: ((arg1: number, arg2: UnityEditor.ShapeEditor.TangentMode) => void);
    InsertPointAt: ((arg1: number, arg2: any) => void);
    RemovePointAt: ((obj: number) => void);
    GetPointsCount: (() => number);
    ScreenToLocal: ((arg1: any) => any);
    LocalToScreen: ((arg1: any) => any);
    LocalToWorldMatrix: (() => any);
    DistanceToRectangle: (() => ((pos: any, rotation: any, handleSize: number) => number));
    DistanceToDiamond: (() => ((pos: any, rotation: any, handleSize: number) => number));
    DistanceToCircle: (() => ((pos: any, rotation: any, handleSize: number) => number));
    Repaint: (() => void);
    RecordUndo: (() => void);
    Snap: ((arg1: any) => any);
    Frame: ((obj: any) => void);
    OnPointClick: ((obj: number) => void);
    OpenEnded: (() => boolean);
    GetHandleSize: (() => number);
  }
}
