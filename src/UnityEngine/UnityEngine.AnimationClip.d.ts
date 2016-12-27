declare namespace UnityEngine {
  class AnimationClip extends UnityEngine.Motion {
    // constructors
    constructor();
    // methods
    SampleAnimation(go: UnityEngine.GameObject, time: number): void;
    SetCurve(relativePath: string, type: any, propertyName: string, curve: UnityEngine.AnimationCurve): void;
    EnsureQuaternionContinuity(): void;
    ClearCurves(): void;
    AddEvent(evt: UnityEngine.AnimationEvent): void;
    // properties
    readonly length: number;
    frameRate: number;
    wrapMode: UnityEngine.WrapMode;
    localBounds: UnityEngine.Bounds;
    legacy: boolean;
    readonly humanMotion: boolean;
    events: UnityEngine.AnimationEvent[];
    // fields
  }
}
