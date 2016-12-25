declare namespace UnityEngine.Experimental.Director {
  class AnimationPlayable {
    // constructors
    private constructor();
    // methods
    Destroy(): any;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveInput(playable: UnityEngine.Experimental.Director.Playable): boolean;
    RemoveAllInputs(): boolean;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): any;
    ToString(): string;
    GetType(): any;
    // properties
    static readonly Null: UnityEngine.Experimental.Director.AnimationPlayable;
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
