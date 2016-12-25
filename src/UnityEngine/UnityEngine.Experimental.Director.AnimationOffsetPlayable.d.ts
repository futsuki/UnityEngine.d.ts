declare namespace UnityEngine.Experimental.Director {
  class AnimationOffsetPlayable {
    // constructors
    private constructor();
    // methods
    static Create(): UnityEngine.Experimental.Director.AnimationOffsetPlayable;
    Destroy(): any;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): any;
    Equals(p: any): boolean;
    GetHashCode(): number;
    IsValid(): boolean;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
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
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    // fields
  }
}
