declare namespace UnityEditor.Animations {
  class AnimatorState {
    // constructors
    constructor();
    // methods
    AddStateMachineBehaviour(stateMachineBehaviourType: any): any;
    AddTransition(transition: UnityEditor.Animations.AnimatorStateTransition): any;
    RemoveTransition(transition: UnityEditor.Animations.AnimatorStateTransition): any;
    AddTransition(destinationState: UnityEditor.Animations.AnimatorState): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationState: UnityEditor.Animations.AnimatorState, defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine, defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    AddExitTransition(): UnityEditor.Animations.AnimatorStateTransition;
    AddExitTransition(defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    GetMotion(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly nameHash: number;
    motion: any;
    speed: number;
    cycleOffset: number;
    mirror: boolean;
    iKOnFeet: boolean;
    writeDefaultValues: boolean;
    tag: string;
    speedParameter: string;
    cycleOffsetParameter: string;
    mirrorParameter: string;
    speedParameterActive: boolean;
    cycleOffsetParameterActive: boolean;
    mirrorParameterActive: boolean;
    transitions: UnityEditor.Animations.AnimatorStateTransition[];
    behaviours: any[];
    readonly uniqueName: string;
    readonly uniqueNameHash: number;
    name: string;
    hideFlags: any;
    // fields
  }
}
