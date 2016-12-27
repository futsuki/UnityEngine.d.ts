declare namespace UnityEngine.Experimental.Director {
  class AnimationMixerPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationMixerPlayable;
    Destroy(): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    SetInputs(clips: UnityEngine.AnimationClip[]): boolean;
    SetInputs(sources: any): boolean;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
