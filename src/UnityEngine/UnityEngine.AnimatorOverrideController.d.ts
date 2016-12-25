declare namespace UnityEngine {
  class AnimatorOverrideController {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    get_Item(name: string): UnityEngine.AnimationClip;
    set_Item(name: string, value: UnityEngine.AnimationClip): any;
    get_Item(clip: UnityEngine.AnimationClip): UnityEngine.AnimationClip;
    set_Item(clip: UnityEngine.AnimationClip, value: UnityEngine.AnimationClip): any;
    clips: UnityEngine.AnimationClipPair[];
    readonly animationClips: UnityEngine.AnimationClip[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
