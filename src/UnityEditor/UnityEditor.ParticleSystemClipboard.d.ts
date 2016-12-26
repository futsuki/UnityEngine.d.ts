declare namespace UnityEditor {
  class ParticleSystemClipboard {
    // constructors
    constructor();
    // methods
    static HasSingleGradient(): boolean;
    static HasDoubleGradient(): boolean;
    static CopyGradient(gradient1: any, gradient2: any): void;
    static PasteGradient(gradientProperty: UnityEditor.SerializedProperty, gradientProperty2: UnityEditor.SerializedProperty): void;
    static HasSingleAnimationCurve(): boolean;
    static HasDoubleAnimationCurve(): boolean;
    static CopyAnimationCurves(animCurve: any, animCurve2: any, scalar: number): void;
    static PasteAnimationCurves(animCurveProperty: UnityEditor.SerializedProperty, animCurveProperty2: UnityEditor.SerializedProperty, scalarProperty: UnityEditor.SerializedProperty, curveRanges: any, particleSystemCurveEditor: ParticleSystemCurveEditor): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
