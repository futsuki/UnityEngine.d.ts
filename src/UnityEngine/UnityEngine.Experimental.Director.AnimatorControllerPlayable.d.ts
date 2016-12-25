declare namespace UnityEngine.Experimental.Director {
  class AnimatorControllerPlayable {
    // constructors
    private constructor();
    // methods
    static Create(controller: UnityEngine.RuntimeAnimatorController): UnityEngine.Experimental.Director.AnimatorControllerPlayable;
    Destroy(): any;
    GetFloat(name: string): number;
    GetFloat(id: number): number;
    SetFloat(name: string, value: number): any;
    SetFloat(id: number, value: number): any;
    GetBool(name: string): boolean;
    GetBool(id: number): boolean;
    SetBool(name: string, value: boolean): any;
    SetBool(id: number, value: boolean): any;
    GetInteger(name: string): number;
    GetInteger(id: number): number;
    SetInteger(name: string, value: number): any;
    SetInteger(id: number, value: number): any;
    SetTrigger(name: string): any;
    SetTrigger(id: number): any;
    ResetTrigger(name: string): any;
    ResetTrigger(id: number): any;
    IsParameterControlledByCurve(name: string): boolean;
    IsParameterControlledByCurve(id: number): boolean;
    GetLayerName(layerIndex: number): string;
    GetLayerIndex(layerName: string): number;
    GetLayerWeight(layerIndex: number): number;
    SetLayerWeight(layerIndex: number, weight: number): any;
    GetCurrentAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetNextAnimatorStateInfo(layerIndex: number): UnityEngine.AnimatorStateInfo;
    GetAnimatorTransitionInfo(layerIndex: number): UnityEngine.AnimatorTransitionInfo;
    GetCurrentAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: any): any;
    GetNextAnimatorClipInfo(layerIndex: number, clips: any): any;
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number): any;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number): any;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): any;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number): any;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number): any;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): any;
    CrossFade(stateName: string, transitionDuration: number, layer: number): any;
    CrossFade(stateName: string, transitionDuration: number): any;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): any;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number): any;
    CrossFade(stateNameHash: number, transitionDuration: number): any;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): any;
    PlayInFixedTime(stateName: string, layer: number): any;
    PlayInFixedTime(stateName: string): any;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): any;
    PlayInFixedTime(stateNameHash: number, layer: number): any;
    PlayInFixedTime(stateNameHash: number): any;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): any;
    Play(stateName: string, layer: number): any;
    Play(stateName: string): any;
    Play(stateName: string, layer: number, normalizedTime: number): any;
    Play(stateNameHash: number, layer: number): any;
    Play(stateNameHash: number): any;
    Play(stateNameHash: number, layer: number, normalizedTime: number): any;
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
