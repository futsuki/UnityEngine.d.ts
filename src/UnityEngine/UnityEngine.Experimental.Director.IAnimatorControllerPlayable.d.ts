declare namespace UnityEngine.Experimental.Director {
  class IAnimatorControllerPlayable {
    // constructors
    private constructor();
    // methods
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
    GetNextAnimatorClipInfo(layerIndex: number): UnityEngine.AnimatorClipInfo[];
    GetCurrentAnimatorClipInfoCount(layerIndex: number): number;
    GetCurrentAnimatorClipInfo(layerIndex: number, clips: any): void;
    GetNextAnimatorClipInfoCount(layerIndex: number): number;
    GetNextAnimatorClipInfo(layerIndex: number, clips: any): void;
    IsInTransition(layerIndex: number): boolean;
    GetParameter(index: number): UnityEngine.AnimatorControllerParameter;
    CrossFadeInFixedTime(stateName: string, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFadeInFixedTime(stateNameHash: number, transitionDuration: number, layer: number, fixedTime: number): void;
    CrossFade(stateName: string, transitionDuration: number, layer: number, normalizedTime: number): void;
    CrossFade(stateNameHash: number, transitionDuration: number, layer: number, normalizedTime: number): void;
    PlayInFixedTime(stateName: string, layer: number, fixedTime: number): void;
    PlayInFixedTime(stateNameHash: number, layer: number, fixedTime: number): void;
    Play(stateName: string, layer: number, normalizedTime: number): void;
    Play(stateNameHash: number, layer: number, normalizedTime: number): void;
    HasState(layerIndex: number, stateID: number): boolean;
    // properties
    readonly layerCount: number;
    readonly parameterCount: number;
    // fields
  }
}
