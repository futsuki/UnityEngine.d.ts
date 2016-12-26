declare namespace UnityEditor {
  class NormalCurveRenderer {
    // constructors
    constructor(curve: any);
    // methods
    GetCurve(): any;
    RangeStart(): number;
    RangeEnd(): number;
    SetWrap(wrap: any): void;
    SetWrap(preWrap: any, postWrap: any): void;
    SetCustomRange(start: number, end: number): void;
    EvaluateCurveSlow(time: number): number;
    EvaluateCurveDeltaSlow(time: number): number;
    static CalculateRanges(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrapMode: any, postWrapMode: any): number[];
    DrawCurve(minTime: number, maxTime: number, color: any, transform: any, wrapColor: any): void;
    static DrawPolyLine(transform: any, minDistance: number, points: any[]): void;
    static DrawCurveWrapped(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrap: any, postWrap: any, mesh: any, firstPoint: any, lastPoint: any, transform: any, color: any, wrapColor: any): void;
    static DrawCurveWrapped(minTime: number, maxTime: number, rangeStart: number, rangeEnd: number, preWrap: any, postWrap: any, color: any, transform: any, points: any[], wrapColor: any): void;
    GetBounds(): any;
    GetBounds(minTime: number, maxTime: number): any;
    FlushCache(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly curveMaterial: any;
    // fields
  }
}
