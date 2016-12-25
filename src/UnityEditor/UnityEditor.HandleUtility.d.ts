declare namespace UnityEditor {
  class HandleUtility {
    // constructors
    constructor();
    // methods
    static CalcLineTranslation(src: any, dest: any, srcPosition: any, constraintDir: any): number;
    static PointOnLineParameter(point: any, linePoint: any, lineDirection: any): number;
    static ProjectPointLine(point: any, lineStart: any, lineEnd: any): any;
    static DistancePointLine(point: any, lineStart: any, lineEnd: any): number;
    static DistancePointBezier(point: any, startPosition: any, endPosition: any, startTangent: any, endTangent: any): number;
    static DistanceToLine(p1: any, p2: any): number;
    static DistanceToCircle(position: any, radius: number): number;
    static DistanceToRectangle(position: any, rotation: any, size: number): number;
    static DistancePointToLine(p: any, a: any, b: any): number;
    static DistancePointToLineSegment(p: any, a: any, b: any): number;
    static DistanceToDisc(center: any, normal: any, radius: number): number;
    static ClosestPointToDisc(center: any, normal: any, radius: number): any;
    static DistanceToArc(center: any, normal: any, from: any, angle: number, radius: number): number;
    static ClosestPointToArc(center: any, normal: any, from: any, angle: number, radius: number): any;
    static DistanceToPolyLine(points: any[]): number;
    static ClosestPointToPolyLine(vertices: any[]): any;
    static AddControl(controlId: number, distance: number): any;
    static AddDefaultControl(controlId: number): any;
    static GetHandleSize(position: any): number;
    static WorldToGUIPoint(world: any): any;
    static GUIPointToWorldRay(position: any): any;
    static WorldPointToSizedRect(position: any, content: any, style: any): any;
    static PickRectObjects(rect: any): any[];
    static PickRectObjects(rect: any, selectPrefabRootsOnly: boolean): any[];
    static PickGameObject(position: any, materialIndex: any): any;
    static PickGameObject(position: any, ignore: any[], materialIndex: any): any;
    static PickGameObject(position: any, selectPrefabRoot: boolean): any;
    static PickGameObject(position: any, selectPrefabRoot: boolean, ignore: any[]): any;
    static PushCamera(camera: any): any;
    static PopCamera(camera: any): any;
    static RaySnap(ray: any): any;
    static Repaint(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly acceleration: number;
    static readonly niceMouseDelta: number;
    static readonly niceMouseDeltaZoom: number;
    static nearestControl: number;
    static readonly handleMaterial: any;
    // fields
  }
}
