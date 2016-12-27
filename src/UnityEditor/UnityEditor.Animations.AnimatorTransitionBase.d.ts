declare namespace UnityEditor.Animations {
  class AnimatorTransitionBase extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetDisplayName(source: UnityEngine.Object): string;
    AddCondition(mode: UnityEditor.Animations.AnimatorConditionMode, threshold: number, parameter: string): void;
    RemoveCondition(condition: UnityEditor.Animations.AnimatorCondition): void;
    // properties
    solo: boolean;
    mute: boolean;
    isExit: boolean;
    destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine;
    destinationState: UnityEditor.Animations.AnimatorState;
    conditions: UnityEditor.Animations.AnimatorCondition[];
    // fields
  }
}
