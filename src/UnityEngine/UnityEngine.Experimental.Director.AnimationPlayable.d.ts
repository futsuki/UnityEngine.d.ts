declare namespace UnityEngine.Experimental.Director {
  class AnimationPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Destroy(): void;
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
    SetInputWeight(inputIndex: number, weight: number): void;
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
