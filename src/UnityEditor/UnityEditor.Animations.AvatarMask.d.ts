declare namespace UnityEditor.Animations {
  class AvatarMask extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetHumanoidBodyPartActive(index: UnityEditor.Animations.AvatarMaskBodyPart): boolean;
    SetHumanoidBodyPartActive(index: UnityEditor.Animations.AvatarMaskBodyPart, value: boolean): void;
    GetTransformPath(index: number): string;
    SetTransformPath(index: number, path: string): void;
    GetTransformActive(index: number): boolean;
    SetTransformActive(index: number, value: boolean): void;
    // properties
    transformCount: number;
    // fields
  }
}
