declare namespace UnityEditor.Animations {
  class AvatarMask {
    // constructors
    constructor();
    // methods
    GetHumanoidBodyPartActive(index: UnityEditor.Animations.AvatarMaskBodyPart): boolean;
    SetHumanoidBodyPartActive(index: UnityEditor.Animations.AvatarMaskBodyPart, value: boolean): any;
    GetTransformPath(index: number): string;
    SetTransformPath(index: number, path: string): any;
    GetTransformActive(index: number): boolean;
    SetTransformActive(index: number, value: boolean): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    transformCount: number;
    name: string;
    hideFlags: any;
    // fields
  }
}
