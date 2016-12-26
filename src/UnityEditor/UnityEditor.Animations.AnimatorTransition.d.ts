declare namespace UnityEditor.Animations {
  class AnimatorTransition {
    // constructors
    constructor();
    // methods
    GetDisplayName(source: any): string;
    AddCondition(mode: UnityEditor.Animations.AnimatorConditionMode, threshold: number, parameter: string): void;
    RemoveCondition(condition: UnityEditor.Animations.AnimatorCondition): void;
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
