declare namespace UnityEditor {
  class RectHandles {
    // constructors
    constructor();
    // methods
    static AngleAroundAxis(dirA: any, dirB: any, axis: any): number;
    static RotationSlider(id: number, cornerPos: any, rotation: number, pivot: any, handleDir: any, outwardsDir1: any, outwardsDir2: any, handleSize: number, drawFunc: UnityEditor.Handles.CapFunction, snap: any): number;
    static RectScalingHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static PivotHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): void;
    static RenderRectWithShadow(active: boolean, corners: any[]): void;
    static DrawPolyLineWithShadow(shadowColor: any, screenOffset: any, points: any[]): void;
    static DrawDottedLineWithShadow(shadowColor: any, screenOffset: any, p1: any, p2: any, screenSpaceSize: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
