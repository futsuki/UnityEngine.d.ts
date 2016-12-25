declare namespace UnityEditor.Animations {
  class AnimatorTransitionBase {
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
