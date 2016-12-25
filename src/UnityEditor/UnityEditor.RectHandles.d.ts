declare namespace UnityEditor {
  class RectHandles {
    // constructors
    constructor();
    // methods
    static AngleAroundAxis(dirA: any, dirB: any, axis: any): number;
    static RotationSlider(id: number, cornerPos: any, rotation: number, pivot: any, handleDir: any, outwardsDir1: any, outwardsDir2: any, handleSize: number, drawFunc: UnityEditor.Handles.CapFunction, snap: any): number;
    static RectScalingHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static PivotHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static RenderRectWithShadow(active: boolean, corners: any[]): any;
    static DrawPolyLineWithShadow(shadowColor: any, screenOffset: any, points: any[]): any;
    static DrawDottedLineWithShadow(shadowColor: any, screenOffset: any, p1: any, p2: any, screenSpaceSize: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
