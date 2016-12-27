declare namespace UnityEngine {
  class StateMachineBehaviour extends UnityEngine.ScriptableObject {
    // constructors
    protected constructor();
    // methods
    OnStateEnter(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateEnter(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateUpdate(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateUpdate(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateExit(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateExit(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMove(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateMove(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateIK(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number): void;
    OnStateIK(animator: UnityEngine.Animator, stateInfo: UnityEngine.AnimatorStateInfo, layerIndex: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMachineEnter(animator: UnityEngine.Animator, stateMachinePathHash: number): void;
    OnStateMachineEnter(animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    OnStateMachineExit(animator: UnityEngine.Animator, stateMachinePathHash: number): void;
    OnStateMachineExit(animator: UnityEngine.Animator, stateMachinePathHash: number, controller: UnityEngine.Experimental.Director.AnimatorControllerPlayable): void;
    // properties
    // fields
  }
}
