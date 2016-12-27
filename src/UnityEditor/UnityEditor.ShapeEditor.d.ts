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
    GetPointPosition: ((number) => any);
    SetPointPosition: ((number, any) => void);
    GetPointLTangent: ((number) => any);
    SetPointLTangent: ((number, any) => void);
    GetPointRTangent: ((number) => any);
    SetPointRTangent: ((number, any) => void);
    GetTangentMode: ((number) => UnityEditor.ShapeEditor.TangentMode);
    SetTangentMode: ((number, UnityEditor.ShapeEditor.TangentMode) => void);
    InsertPointAt: ((number, any) => void);
    RemovePointAt: ((number) => void);
    GetPointsCount: (() => number);
    ScreenToLocal: ((any) => any);
    LocalToScreen: ((any) => any);
    LocalToWorldMatrix: (() => any);
    DistanceToRectangle: (() => ((any, any, number) => number));
    DistanceToDiamond: (() => ((any, any, number) => number));
    DistanceToCircle: (() => ((any, any, number) => number));
    Repaint: (() => void);
    RecordUndo: (() => void);
    Snap: ((any) => any);
    Frame: ((any) => void);
    OnPointClick: ((number) => void);
    OpenEnded: (() => boolean);
    GetHandleSize: (() => number);
  }
}
