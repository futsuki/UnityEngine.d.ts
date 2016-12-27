declare namespace UnityEditor {
  class AudioCurveRendering {
    // constructors
    constructor();
    // methods
    static BeginCurveFrame(r: any): any;
    static EndCurveFrame(): void;
    static DrawCurveFrame(r: any): any;
    static DrawCurveBackground(r: any): void;
    static DrawFilledCurve(r: any, eval_: ((number) => number), curveColor: any): void;
    static DrawFilledCurve(r: any, eval_: ((number, any) => number)): void;
    static DrawMinMaxFilledCurve(r: any, eval_: ((number, any, any, any) => void)): void;
    static DrawSymmetricFilledCurve(r: any, eval_: ((number, any) => number)): void;
    static DrawCurve(r: any, eval_: ((number) => number), curveColor: any): void;
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
