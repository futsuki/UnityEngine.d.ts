declare namespace UnityEditor.Animations {
  class AnimatorState extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    AddStateMachineBehaviour(stateMachineBehaviourType: any): any;
    AddTransition(transition: UnityEditor.Animations.AnimatorStateTransition): void;
    AddTransition(destinationState: UnityEditor.Animations.AnimatorState): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationState: UnityEditor.Animations.AnimatorState, defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    AddTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine, defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    RemoveTransition(transition: UnityEditor.Animations.AnimatorStateTransition): void;
    AddExitTransition(): UnityEditor.Animations.AnimatorStateTransition;
    AddExitTransition(defaultExitTime: boolean): UnityEditor.Animations.AnimatorStateTransition;
    GetMotion(): UnityEngine.Motion;
    // properties
    readonly nameHash: number;
    motion: UnityEngine.Motion;
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
    // fields
  }
}
