declare namespace UnityEngine.Experimental.Director {
  class AnimationMixerPlayable {
    // constructors
    private constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationMixerPlayable;
    Destroy(): any;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    SetInputs(clips: UnityEngine.AnimationClip[]): boolean;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): any;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    ToString(): string;
    GetType(): any;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
