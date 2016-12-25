declare namespace UnityEngine {
  class RuntimeAnimatorController {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly animationClips: UnityEngine.AnimationClip[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
