declare namespace UnityEditor {
  class AnimationUtility {
    // constructors
    constructor();
    // methods
    static GetAnimationClips(component: any): any[];
    static GetAnimationClips(gameObject: any): any[];
    static SetAnimationClips(animation: any, clips: any[]): any;
    static GetAnimatableBindings(targetObject: any, root: any): UnityEditor.EditorCurveBinding[];
    static GetFloatValue(root: any, binding: UnityEditor.EditorCurveBinding, data: any): boolean;
    static GetEditorCurveValueType(root: any, binding: UnityEditor.EditorCurveBinding): any;
    static GetObjectReferenceValue(root: any, binding: UnityEditor.EditorCurveBinding, targetObject: any): boolean;
    static GetAnimatedObject(root: any, binding: UnityEditor.EditorCurveBinding): any;
    static PropertyModificationToEditorCurveBinding(modification: UnityEditor.PropertyModification, gameObject: any, binding: any): any;
    static GetCurveBindings(clip: any): UnityEditor.EditorCurveBinding[];
    static GetObjectReferenceCurveBindings(clip: any): UnityEditor.EditorCurveBinding[];
    static GetObjectReferenceCurve(clip: any, binding: UnityEditor.EditorCurveBinding): UnityEditor.ObjectReferenceKeyframe[];
    static GetEditorCurve(clip: any, binding: UnityEditor.EditorCurveBinding): any;
    static SetEditorCurve(clip: any, binding: UnityEditor.EditorCurveBinding, curve: any): any;
    static SetObjectReferenceCurve(clip: any, binding: UnityEditor.EditorCurveBinding, keyframes: UnityEditor.ObjectReferenceKeyframe[]): any;
    static SetKeyBroken(curve: any, index: number, broken: boolean): any;
    static SetKeyLeftTangentMode(curve: any, index: number, tangentMode: UnityEditor.AnimationUtility.TangentMode): any;
    static SetKeyRightTangentMode(curve: any, index: number, tangentMode: UnityEditor.AnimationUtility.TangentMode): any;
    static GetAllCurves(clip: any): UnityEditor.AnimationClipCurveData[];
    static GetAllCurves(clip: any, includeCurveData: boolean): UnityEditor.AnimationClipCurveData[];
    static GetFloatValue(root: any, relativePath: string, type: any, propertyName: string, data: any): boolean;
    static SetEditorCurve(clip: any, relativePath: string, type: any, propertyName: string, curve: any): any;
    static GetEditorCurve(clip: any, relativePath: string, type: any, propertyName: string): any;
    static GetAnimationEvents(clip: any): any[];
    static SetAnimationEvents(clip: any, events: any[]): any;
    static CalculateTransformPath(targetTransform: any, root: any): string;
    static GetAnimationClipSettings(clip: any): UnityEditor.AnimationClipSettings;
    static SetAnimationClipSettings(clip: any, srcClipInfo: UnityEditor.AnimationClipSettings): any;
    static SetAdditiveReferencePose(clip: any, referenceClip: any, time: number): any;
    static IsValidPolynomialCurve(curve: any): boolean;
    static ConstrainToPolynomialCurve(curve: any): any;
    static InAnimationMode(): boolean;
    static StartAnimationMode(objects: any[]): any;
    static StopAnimationMode(): any;
    static SetAnimationType(clip: any, type: UnityEditor.ModelImporterAnimationType): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static onCurveWasModified: UnityEditor.AnimationUtility.OnCurveWasModified;
  }
}
