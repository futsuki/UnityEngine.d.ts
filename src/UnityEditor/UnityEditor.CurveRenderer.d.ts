declare namespace UnityEditor {
  class CurveRenderer {
    // constructors
    private constructor();
    // methods
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, wrapColor: any): void;
    GetCurve(): any;
    RangeStart(): number;
    RangeEnd(): number;
    SetWrap(wrap: any): void;
    SetWrap(preWrap: any, postWrap: any): void;
    SetCustomRange(start: number, end: number): void;
    EvaluateCurveSlow(time: number): number;
    EvaluateCurveDeltaSlow(time: number): number;
    GetBounds(): any;
    GetBounds(minTime: number, maxTime: number): any;
    FlushCache(): void;
    // properties
    // fields
  }
}
