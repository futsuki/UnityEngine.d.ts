declare namespace UnityEditor {
  class RotationCurveInterpolation {
    // constructors
    constructor();
    // methods
    static GetModeFromCurveData(data: UnityEditor.EditorCurveBinding): UnityEditor.RotationCurveInterpolation.Mode;
    static GetCurveState(clip: any, selection: UnityEditor.EditorCurveBinding[]): UnityEditor.RotationCurveInterpolation.State;
    static GetCurveIndexFromName(name: string): number;
    static ExtractComponentCharacter(name: string): any;
    static GetPrefixForInterpolation(newInterpolationMode: UnityEditor.RotationCurveInterpolation.Mode): string;
    static RemapAnimationBindingForAddKey(binding: UnityEditor.EditorCurveBinding, clip: any): UnityEditor.EditorCurveBinding[];
    static RemapAnimationBindingForRotationAddKey(binding: UnityEditor.EditorCurveBinding, clip: any): UnityEditor.EditorCurveBinding[];
    static RemapAnimationBindingForRotationCurves(curveBinding: UnityEditor.EditorCurveBinding, clip: any): UnityEditor.EditorCurveBinding;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kPostFix: any[];
  }
}
