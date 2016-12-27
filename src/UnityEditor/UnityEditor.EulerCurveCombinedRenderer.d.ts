declare namespace UnityEditor {
  class EulerCurveCombinedRenderer extends System.Object {
    // constructors
    constructor(quaternionX: any, quaternionY: any, quaternionZ: any, quaternionW: any, eulerX: any, eulerY: any, eulerZ: any);
    // methods
    GetCurveOfComponent(component: number): any;
    RangeStart(): number;
    RangeEnd(): number;
    PreWrapMode(): any;
    PostWrapMode(): any;
    SetWrap(wrap: any): void;
    SetWrap(preWrap: any, postWrap: any): void;
    SetCustomRange(start: number, end: number): void;
    EvaluateCurveDeltaSlow(time: number, component: number): number;
    EvaluateCurveSlow(time: number, component: number): number;
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, component: number, wrapColor: any): void;
    GetBounds(minTime: number, maxTime: number, component: number): any;
    // properties
    // fields
  }
}
