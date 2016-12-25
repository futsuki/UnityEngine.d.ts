declare namespace UnityEditor {
  class EulerCurveCombinedRenderer {
    // constructors
    constructor(quaternionX: any, quaternionY: any, quaternionZ: any, quaternionW: any, eulerX: any, eulerY: any, eulerZ: any);
    // methods
    GetCurveOfComponent(component: number): any;
    RangeStart(): number;
    RangeEnd(): number;
    PreWrapMode(): any;
    PostWrapMode(): any;
    SetWrap(wrap: any): any;
    SetWrap(preWrap: any, postWrap: any): any;
    SetCustomRange(start: number, end: number): any;
    EvaluateCurveDeltaSlow(time: number, component: number): number;
    EvaluateCurveSlow(time: number, component: number): number;
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, component: number, wrapColor: any): any;
    GetBounds(minTime: number, maxTime: number, component: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
