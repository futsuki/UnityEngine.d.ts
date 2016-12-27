declare namespace UnityEditor.Animations {
  class AnimatorController extends UnityEngine.RuntimeAnimatorController {
    // constructors
    constructor();
    // methods
    static SetAnimatorController(behavior: any, controller: UnityEditor.Animations.AnimatorController): void;
    MakeUniqueParameterName(name: string): string;
    MakeUniqueLayerName(name: string): string;
    static FindStateMachineBehaviourContext(behaviour: any): UnityEditor.Animations.StateMachineBehaviourContext[];
    static CreateStateMachineBehaviour(script: UnityEditor.MonoScript): number;
    AddEffectiveStateMachineBehaviour(stateMachineBehaviourType: any, state: UnityEditor.Animations.AnimatorState, layerIndex: number): any;
    AddLayer(name: string): void;
    AddLayer(layer: UnityEditor.Animations.AnimatorControllerLayer): void;
    RemoveLayer(index: number): void;
    AddParameter(name: string, type: any): void;
    AddParameter(paramater: any): void;
    RemoveParameter(index: number): void;
    RemoveParameter(parameter: any): void;
    AddMotion(motion: UnityEngine.Motion): UnityEditor.Animations.AnimatorState;
    AddMotion(motion: UnityEngine.Motion, layerIndex: number): UnityEditor.Animations.AnimatorState;
    CreateBlendTreeInController(name: string, tree: any): UnityEditor.Animations.AnimatorState;
    CreateBlendTreeInController(name: string, tree: any, layerIndex: number): UnityEditor.Animations.AnimatorState;
    static CreateAnimatorControllerAtPath(path: string): UnityEditor.Animations.AnimatorController;
    static AllocateAnimatorClip(name: string): any;
    static CreateAnimatorControllerAtPathWithClip(path: string, clip: any): UnityEditor.Animations.AnimatorController;
    SetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, motion: UnityEngine.Motion): void;
    SetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, motion: UnityEngine.Motion, layerIndex: number): void;
    GetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState): UnityEngine.Motion;
    GetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, layerIndex: number): UnityEngine.Motion;
    SetStateEffectiveBehaviours(state: UnityEditor.Animations.AnimatorState, layerIndex: number, behaviours: any[]): void;
    GetStateEffectiveBehaviours(state: UnityEditor.Animations.AnimatorState, layerIndex: number): any[];
    // properties
    layers: UnityEditor.Animations.AnimatorControllerLayer[];
    parameters: any[];
    // fields
  }
}
