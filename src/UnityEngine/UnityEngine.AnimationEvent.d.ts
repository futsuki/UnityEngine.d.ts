declare namespace UnityEngine {
  class AnimationEvent {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
