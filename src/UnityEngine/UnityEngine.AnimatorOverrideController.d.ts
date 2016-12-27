declare namespace UnityEngine {
  class AnimatorOverrideController extends UnityEngine.RuntimeAnimatorController {
    // constructors
    constructor();
    // methods
    // properties
    runtimeAnimatorController: UnityEngine.RuntimeAnimatorController;
    get_Item(name: string): UnityEngine.AnimationClip;
    set_Item(name: string, value: UnityEngine.AnimationClip): void;
    get_Item(clip: UnityEngine.AnimationClip): UnityEngine.AnimationClip;
    set_Item(clip: UnityEngine.AnimationClip, value: UnityEngine.AnimationClip): void;
    clips: UnityEngine.AnimationClipPair[];
    // fields
  }
}
