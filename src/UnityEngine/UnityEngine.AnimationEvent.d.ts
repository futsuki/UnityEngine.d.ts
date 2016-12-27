declare namespace UnityEngine {
  class AnimationEvent extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    data: string;
    stringParameter: string;
    floatParameter: number;
    intParameter: number;
    objectReferenceParameter: UnityEngine.Object;
    functionName: string;
    time: number;
    messageOptions: UnityEngine.SendMessageOptions;
    readonly isFiredByLegacy: boolean;
    readonly isFiredByAnimator: boolean;
    readonly animationState: UnityEngine.AnimationState;
    readonly animatorStateInfo: UnityEngine.AnimatorStateInfo;
    readonly animatorClipInfo: UnityEngine.AnimatorClipInfo;
    // fields
  }
}
