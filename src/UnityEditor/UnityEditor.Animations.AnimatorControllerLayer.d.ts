declare namespace UnityEditor.Animations {
  class AnimatorControllerLayer {
    // constructors
    constructor();
    // methods
    GetOverrideMotion(state: UnityEditor.Animations.AnimatorState): any;
    SetOverrideMotion(state: UnityEditor.Animations.AnimatorState, motion: any): void;
    GetOverrideBehaviours(state: UnityEditor.Animations.AnimatorState): any[];
    SetOverrideBehaviours(state: UnityEditor.Animations.AnimatorState, behaviours: any[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
