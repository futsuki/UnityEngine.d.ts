declare namespace UnityEngine.Experimental.Director {
  class AnimationOffsetPlayable extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationOffsetPlayable;
    Destroy(): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    // fields
  }
}
