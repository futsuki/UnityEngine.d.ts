declare namespace UnityEditor {
  class NormalCurveRenderer {
    // constructors
    constructor(curve: any);
    // methods
    GetCurve(): any;
    RangeStart(): number;
    RangeEnd(): number;
    SetWrap(wrap: any): any;
    SetWrap(preWrap: any, postWrap: any): any;
    SetCustomRange(start: number, end: number): any;
    EvaluateCurveSlow(time: number): number;
    EvaluateCurveDeltaSlow(time: number): number;
    static CalculateRanges(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrapMode: any, postWrapMode: any): number[];
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, wrapColor: any): any;
    static DrawPolyLine(transform: any, minDistance: number, points: any[]): any;
    static DrawCurveWrapped(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrap: any, postWrap: any, mesh: any, firstPoint: any, lastPoint: any, transform: any, color: any, wrapColor: any): any;
    static DrawCurveWrapped(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrap: any, postWrap: any, color: any, transform: any, points: any[], wrapColor: any): any;
    GetBounds(): any;
    GetBounds(minTime: number, maxTime: number): any;
    FlushCache(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly curveMaterial: any;
    // fields
  }
}
