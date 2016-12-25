declare namespace UnityEditor {
  class AudioCurveRendering {
    // constructors
    constructor();
    // methods
    static BeginCurveFrame(r: any): any;
    static EndCurveFrame(): any;
    static DrawCurveFrame(r: any): any;
    static DrawCurveBackground(r: any): any;
    static DrawFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveEvaluator, curveColor: any): any;
    static DrawFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveAndColorEvaluator): any;
    static DrawMinMaxFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioMinMaxCurveAndColorEvaluator): any;
    static DrawSymmetricFilledCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveAndColorEvaluator): any;
    static DrawCurve(r: any, eval_: UnityEditor.AudioCurveRendering.AudioCurveEvaluator, curveColor: any): any;
    static DrawGradientRect(r: any, c1: any, c2: any, blend: number, horizontal: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kAudioOrange: any;
  }
}
