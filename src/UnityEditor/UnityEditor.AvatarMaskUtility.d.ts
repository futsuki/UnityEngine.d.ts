declare namespace UnityEditor {
  class AvatarMaskUtility {
    // constructors
    constructor();
    // methods
    static GetAvatarHumanTransform(so: UnityEditor.SerializedObject, refTransformsPath: string[]): string[];
    static UpdateTransformMask(mask: UnityEditor.Animations.AvatarMask, refTransformsPath: string[], humanTransforms: string[]): any;
    static UpdateTransformMask(transformMask: UnityEditor.SerializedProperty, refTransformsPath: string[], humanTransforms: string[]): any;
    static SetActiveHumanTransforms(mask: UnityEditor.Animations.AvatarMask, humanTransforms: string[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
