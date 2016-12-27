declare namespace UnityEditor {
  class AudioCurveRendering extends System.Object {
    // constructors
    constructor();
    // methods
    static BeginCurveFrame(r: any): any;
    static EndCurveFrame(): void;
    static DrawCurveFrame(r: any): any;
    static DrawCurveBackground(r: any): void;
    static DrawFilledCurve(r: any, eval_: ((x: number) => number), curveColor: any): void;
    static DrawFilledCurve(r: any, eval_: ((x: number, col: any) => number)): void;
    static DrawMinMaxFilledCurve(r: any, eval_: ((x: number, col: any, minValue: any, maxValue: any) => void)): void;
    static DrawSymmetricFilledCurve(r: any, eval_: ((x: number, col: any) => number)): void;
    static DrawCurve(r: any, eval_: ((x: number) => number), curveColor: any): void;
    static DrawGradientRect(r: any, c1: any, c2: any, blend: number, horizontal: boolean): void;
    // properties
    // fields
    static kAudioOrange: any;
  }
}
