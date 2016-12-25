declare namespace UnityEngine {
  class AnimationState {
    // constructors
    constructor();
    // methods
    AddMixingTransform(mix: UnityEngine.Transform, recursive: boolean): any;
    AddMixingTransform(mix: UnityEngine.Transform): any;
    RemoveMixingTransform(mix: UnityEngine.Transform): any;
    Equals(o: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    enabled: boolean;
    weight: number;
    wrapMode: UnityEngine.WrapMode;
    time: number;
    normalizedTime: number;
    speed: number;
    normalizedSpeed: number;
    readonly length: number;
    layer: number;
    readonly clip: UnityEngine.AnimationClip;
    name: string;
    blendMode: UnityEngine.AnimationBlendMode;
    // fields
  }
}
