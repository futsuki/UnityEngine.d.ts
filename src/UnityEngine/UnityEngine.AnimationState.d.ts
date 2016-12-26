declare namespace UnityEngine {
  class AnimationState {
    // constructors
    constructor();
    // methods
    AddMixingTransform(mix: UnityEngine.Transform, recursive: boolean): void;
    AddMixingTransform(mix: UnityEngine.Transform): void;
    RemoveMixingTransform(mix: UnityEngine.Transform): void;
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
