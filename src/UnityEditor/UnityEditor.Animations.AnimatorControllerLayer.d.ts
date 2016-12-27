declare namespace UnityEditor.Animations {
  class AnimatorControllerLayer extends System.Object {
    // constructors
    constructor();
    // methods
    GetOverrideMotion(state: UnityEditor.Animations.AnimatorState): UnityEngine.Motion;
    SetOverrideMotion(state: UnityEditor.Animations.AnimatorState, motion: UnityEngine.Motion): void;
    GetOverrideBehaviours(state: UnityEditor.Animations.AnimatorState): any[];
    SetOverrideBehaviours(state: UnityEditor.Animations.AnimatorState, behaviours: any[]): void;
    // properties
    name: string;
    stateMachine: UnityEditor.Animations.AnimatorStateMachine;
    avatarMask: UnityEditor.Animations.AvatarMask;
    blendingMode: UnityEditor.Animations.AnimatorLayerBlendingMode;
    syncedLayerIndex: number;
    iKPass: boolean;
    defaultWeight: number;
    syncedLayerAffectsTiming: boolean;
    // fields
  }
}
