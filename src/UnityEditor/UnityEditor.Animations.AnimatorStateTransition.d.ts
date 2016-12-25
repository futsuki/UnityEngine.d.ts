declare namespace UnityEditor.Animations {
  class AnimatorStateTransition {
    // constructors
    constructor();
    // methods
    GetDisplayName(source: any): string;
    AddCondition(mode: UnityEditor.Animations.AnimatorConditionMode, threshold: number, parameter: string): any;
    RemoveCondition(condition: UnityEditor.Animations.AnimatorCondition): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    duration: number;
    offset: number;
    interruptionSource: UnityEditor.Animations.TransitionInterruptionSource;
    orderedInterruption: boolean;
    exitTime: number;
    hasExitTime: boolean;
    hasFixedDuration: boolean;
    canTransitionToSelf: boolean;
    solo: boolean;
    mute: boolean;
    isExit: boolean;
    destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine;
    destinationState: UnityEditor.Animations.AnimatorState;
    conditions: UnityEditor.Animations.AnimatorCondition[];
    name: string;
    hideFlags: any;
    // fields
  }
}
