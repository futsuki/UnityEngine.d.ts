declare namespace UnityEditor {
  class AudioCurveRendering {
    // constructors
    constructor();
    // methods
    static BeginCurveFrame(r: any): any;
    static EndCurveFrame(): void;
    static DrawCurveFrame(r: any): any;
    static DrawCurveBackground(r: any): void;
    static DrawFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveEvaluator, curveColor: any): void;
    static DrawFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveAndColorEvaluator): void;
    static DrawMinMaxFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioMinMaxCurveAndColorEvaluator): void;
    static DrawSymmetricFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveAndColorEvaluator): void;
    static DrawCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveEvaluator, curveColor: any): void;
    static DrawGradientRect(r: any, c1: any, c2: any, blend: number, horizontal: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kAudioOrange: any;
  }
}
