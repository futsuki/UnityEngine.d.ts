declare namespace UnityEditor.Animations {
  class AnimatorStateMachine extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetStateMachineTransitions(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine): UnityEditor.Animations.AnimatorTransition[];
    SetStateMachineTransitions(sourceStateMachine: UnityEditor.Animations.AnimatorStateMachine, transitions: UnityEditor.Animations.AnimatorTransition[]): void;
    AddStateMachineBehaviour(stateMachineBehaviourType: any): any;
    MakeUniqueStateName(name: string): string;
    MakeUniqueStateMachineName(name: string): string;
    AddState(name: string): UnityEditor.Animations.AnimatorState;
    AddState(name: string, position: any): UnityEditor.Animations.AnimatorState;
    AddState(state: UnityEditor.Animations.AnimatorState, position: any): void;
    RemoveState(state: UnityEditor.Animations.AnimatorState): void;
    AddStateMachine(name: string): UnityEditor.Animations.AnimatorStateMachine;
    AddStateMachine(name: string, position: any): UnityEditor.Animations.AnimatorStateMachine;
    AddStateMachine(stateMachine: UnityEditor.Animations.AnimatorStateMachine, position: any): void;
    RemoveStateMachine(stateMachine: UnityEditor.Animations.AnimatorStateMachine): void;
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
    // fields
  }
}
