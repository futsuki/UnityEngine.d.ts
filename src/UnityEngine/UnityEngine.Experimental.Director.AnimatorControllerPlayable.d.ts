declare namespace UnityEngine.Experimental.Director {
  class AnimatorControllerPlayable {
    // constructors
    private constructor();
    // methods
    static Create(controller: UnityEngine.RuntimeAnimatorController): UnityEngine.Experimental.Director.AnimatorControllerPlayable;
    Destroy(): void;
    GetFloat(name: string): number;
    GetFloat(id: number): number;
    SetFloat(name: string, value: number): void;
    SetFloat(id: number, value: number): void;
    GetBool(name: string): boolean;
    GetBool(id: number): boolean;
    SetBool(name: string, value: boolean): void;
    SetBool(id: number, value: boolean): void;
    GetInteger(name: string): number;
    GetInteger(id: number): number;
    SetInteger(name: string, value: number): void;
    SetInteger(id: number, value: number): void;
    SetTrigger(name: string): void;
    SetTrigger(id: number): void;
    ResetTrigger(name: string): void;
    ResetTrigger(id: number): void;
    IsParameterControlledByCurve(name: string): boolean;
    IsParameterControlledByCurve(id: number): boolean;
    GetLayerName(layerIndex: number): string;
    GetLayerIndex(layerName: string): number;
    GetLayerWeight(layerIndex: number): number;
    SetLayerWeight(layerIndex: number, weight: number): void;
    GetCurrentAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetNextAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetAnimatorTransitionInfo(layerIndex: number): UnityEngine.AnimatorTransitionInfo;
    GetCurrentAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: any): void;
    GetNextAnimatorClipInfo(layerIndex: number, clips: any): void;
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number): void;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number): void;
    CrossFade(stateName: string, transitionDuration: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): void;
    PlayInFixedTime(stateName: string, layer: number): void;
    PlayInFixedTime(stateName: string): void;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number): void;
    PlayInFixedTime(stateNameHash: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): void;
    Play(stateName: string, layer: number): void;
    Play(stateName: string): void;
    Play(stateName: string, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number): void;
    Play(stateNameHash: number): void;
    Play(stateNameHash: number, layer: number, normalizedTime: number): void;
    HasState(layerIndex: number, stateID: number): boolean;
    IsValid(): boolean;
    Equals(p: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly animatorController: UnityEngine.RuntimeAnimatorController;
    readonly layerCount: number;
    readonly parameterCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
