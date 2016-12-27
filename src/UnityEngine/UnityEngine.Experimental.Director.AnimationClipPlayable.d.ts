declare namespace UnityEngine.Experimental.Director {
  class AnimationClipPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(clip: UnityEngine.AnimationClip): UnityEngine.Experimental.Director.AnimationClipPlayable;
    Destroy(): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    // properties
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    readonly outputCount: number;
    readonly clip: UnityEngine.AnimationClip;
    speed: number;
    applyFootIK: boolean;
    // fields
  }
}
