declare namespace UnityEditor.Animations {
  class AnimatorController {
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
    AddMotion(motion: any): UnityEditor.Animations.AnimatorState;
    AddMotion(motion: any, layerIndex: number): UnityEditor.Animations.AnimatorState;
    CreateBlendTreeInController(name: string, tree: any): UnityEditor.Animations.AnimatorState;
    CreateBlendTreeInController(name: string, tree: any, layerIndex: number): UnityEditor.Animations.AnimatorState;
    static CreateAnimatorControllerAtPath(path: string): UnityEditor.Animations.AnimatorController;
    static AllocateAnimatorClip(name: string): any;
    static CreateAnimatorControllerAtPathWithClip(path: string, clip: any): UnityEditor.Animations.AnimatorController;
    SetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, motion: any): void;
    SetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, motion: any, layerIndex: number): void;
    GetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState): any;
    GetStateEffectiveMotion(state: UnityEditor.Animations.AnimatorState, layerIndex: number): any;
    SetStateEffectiveBehaviours(state: UnityEditor.Animations.AnimatorState, layerIndex: number, behaviours: any[]): void;
    GetStateEffectiveBehaviours(state: UnityEditor.Animations.AnimatorState, layerIndex: number): any[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    layers: UnityEditor.Animations.AnimatorControllerLayer[];
    parameters: any[];
    readonly animationClips: any[];
    name: string;
    hideFlags: any;
    // fields
  }
}
