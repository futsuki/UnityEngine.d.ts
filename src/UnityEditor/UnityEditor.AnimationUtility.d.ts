declare namespace UnityEditor {
  class AnimationUtility {
    // constructors
    constructor();
    // methods
    static GetAnimationClips(component: any): any[];
    static GetAnimationClips(gameObject: any): any[];
    static SetAnimationClips(animation: any, clips: any[]): void;
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
    static SetEditorCurve(clip: any, binding: UnityEditor.EditorCurveBinding, curve: any): void;
    static SetObjectReferenceCurve(clip: any, binding: UnityEditor.EditorCurveBinding, keyframes: UnityEditor.ObjectReferenceKeyframe[]): void;
    static SetKeyBroken(curve: any, index: number, broken: boolean): void;
    static SetKeyLeftTangentMode(curve: any, index: number, tangentMode: UnityEditor.AnimationUtility.TangentMode): void;
    static SetKeyRightTangentMode(curve: any, index: number, tangentMode: UnityEditor.AnimationUtility.TangentMode): void;
    static GetAllCurves(clip: any): UnityEditor.AnimationClipCurveData[];
    static GetAllCurves(clip: any, includeCurveData: boolean): UnityEditor.AnimationClipCurveData[];
    static GetFloatValue(root: any, relativePath: string, type: any, propertyName: string, data: any): boolean;
    static SetEditorCurve(clip: any, relativePath: string, type: any, propertyName: string, curve: any): void;
    static GetEditorCurve(clip: any, relativePath: string, type: any, propertyName: string): any;
    static GetAnimationEvents(clip: any): any[];
    static SetAnimationEvents(clip: any, events: any[]): void;
    static CalculateTransformPath(targetTransform: any, root: any): string;
    static GetAnimationClipSettings(clip: any): UnityEditor.AnimationClipSettings;
    static SetAnimationClipSettings(clip: any, srcClipInfo: UnityEditor.AnimationClipSettings): void;
    static SetAdditiveReferencePose(clip: any, referenceClip: any, time: number): void;
    static IsValidPolynomialCurve(curve: any): boolean;
    static ConstrainToPolynomialCurve(curve: any): void;
    static InAnimationMode(): boolean;
    static StartAnimationMode(objects: any[]): void;
    static StopAnimationMode(): void;
    static SetAnimationType(clip: any, type: UnityEditor.ModelImporterAnimationType): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static onCurveWasModified: ((any, UnityEditor.EditorCurveBinding, UnityEditor.AnimationUtility.CurveModifiedType) => void);
  }
}
