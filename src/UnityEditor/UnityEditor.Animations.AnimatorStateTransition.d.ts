declare namespace UnityEditor.Animations {
  class AnimatorStateTransition extends UnityEditor.Animations.AnimatorTransitionBase {
    // constructors
    constructor();
    // methods
    // properties
    duration: number;
    offset: number;
    interruptionSource: UnityEditor.Animations.TransitionInterruptionSource;
    orderedInterruption: boolean;
    exitTime: number;
    hasExitTime: boolean;
    hasFixedDuration: boolean;
    canTransitionToSelf: boolean;
    // fields
  }
}
