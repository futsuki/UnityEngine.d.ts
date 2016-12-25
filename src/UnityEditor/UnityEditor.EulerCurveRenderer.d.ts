declare namespace UnityEditor {
  class EulerCurveRenderer {
    // constructors
    constructor(component: number, renderer: UnityEditor.EulerCurveCombinedRenderer);
    // methods
    GetCurve(): any;
    RangeStart(): number;
    RangeEnd(): number;
    SetWrap(wrap: any): any;
    SetWrap(preWrapMode: any, postWrapMode: any): any;
    SetCustomRange(start: number, end: number): any;
    EvaluateCurveSlow(time: number): number;
    EvaluateCurveDeltaSlow(time: number): number;
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, wrapColor: any): any;
    GetBounds(): any;
    GetBounds(minTime: number, maxTime: number): any;
    FlushCache(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
