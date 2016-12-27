declare namespace UnityEditor {
  class EulerCurveRenderer extends System.Object {
    // constructors
    constructor(component: number, renderer: UnityEditor.EulerCurveCombinedRenderer);
    // methods
    GetCurve(): any;
    RangeStart(): number;
    RangeEnd(): number;
    SetWrap(wrap: any): void;
    SetWrap(preWrapMode: any, postWrapMode: any): void;
    SetCustomRange(start: number, end: number): void;
    EvaluateCurveSlow(time: number): number;
    EvaluateCurveDeltaSlow(time: number): number;
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, wrapColor: any): void;
    GetBounds(): any;
    GetBounds(minTime: number, maxTime: number): any;
    FlushCache(): void;
    // properties
    // fields
  }
}
