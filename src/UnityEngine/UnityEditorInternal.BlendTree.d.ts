declare namespace UnityEditorInternal {
  class BlendTree {
    // constructors
    constructor();
    // methods
    ValidateIfRetargetable(val: boolean): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly averageDuration: number;
    readonly averageAngularSpeed: number;
    readonly averageSpeed: UnityEngine.Vector3;
    readonly apparentSpeed: number;
    readonly isLooping: boolean;
    readonly legacy: boolean;
    readonly isHumanMotion: boolean;
    readonly isAnimatorMotion: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
