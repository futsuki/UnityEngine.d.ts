declare namespace UnityEditor.Animations {
  class AnimatorStateMachine {
    // constructors
    constructor();
    // methods
    GetStateMachineTransitions(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition[];
    SetStateMachineTransitions(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine, transitions: UnityEditor.Animations.AnimatorTransition[]): any;
    AddStateMachineBehaviour(stateMachineBehaviourType: any): any;
    MakeUniqueStateName(name: string): string;
    MakeUniqueStateMachineName(name: string): string;
    AddState(name: string): UnityEditor.Animations.AnimatorState;
    AddState(name: string, position: any): UnityEditor.Animations.AnimatorState;
    AddState(state: UnityEditor.Animations.AnimatorState, position: any): any;
    RemoveState(state: UnityEditor.Animations.AnimatorState): any;
    AddStateMachine(name: string): UnityEditor.Animations.AnimatorStateMachine;
    AddStateMachine(name: string, position: any): UnityEditor.Animations.AnimatorStateMachine;
    AddStateMachine(stateMachine: UnityEditor.Animations.AnimatorStateMachine, position: any): any;
    RemoveStateMachine(stateMachine: UnityEditor.Animations.AnimatorStateMachine): any;
    AddAnyStateTransition(destinationState: UnityEditor.Animations.AnimatorState): UnityEditor.Animations.AnimatorStateTransition;
    AddAnyStateTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorStateTransition;
    RemoveAnyStateTransition(transition: UnityEditor.Animations.AnimatorStateTransition): boolean;
    AddStateMachineTransition(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition;
    AddStateMachineTransition(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine, destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition;
    AddStateMachineTransition(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine, destinationState: UnityEditor.Animations.AnimatorState): UnityEditor.Animations.AnimatorTransition;
    AddStateMachineExitTransition(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition;
    RemoveStateMachineTransition(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine, transition: UnityEditor.Animations.AnimatorTransition): boolean;
    AddEntryTransition(destinationState: UnityEditor.Animations.AnimatorState): UnityEditor.Animations.AnimatorTransition;
    AddEntryTransition(destinationStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition;
    RemoveEntryTransition(transition: UnityEditor.Animations.AnimatorTransition): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    states: UnityEditor.Animations.ChildAnimatorState[];
    stateMachines: UnityEditor.Animations.ChildAnimatorStateMachine[];
    defaultState: UnityEditor.Animations.AnimatorState;
    anyStatePosition: any;
    entryPosition: any;
    exitPosition: any;
    parentStateMachinePosition: any;
    anyStateTransitions: UnityEditor.Animations.AnimatorStateTransition[];
    entryTransitions: UnityEditor.Animations.AnimatorTransition[];
    behaviours: any[];
    name: string;
    hideFlags: any;
    // fields
  }
}
