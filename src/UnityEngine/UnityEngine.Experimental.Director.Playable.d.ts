declare namespace UnityEngine.Experimental.Director {
  class Playable {
    // constructors
    private constructor();
    // methods
    Destroy(): any;
    IsValid(): boolean;
    static GetTypeOf(playable: UnityEngine.Experimental.Director.Playable): any;
    static Connect(source: UnityEngine.Experimental.Director.Playable, target: UnityEngine.Experimental.Director.Playable): boolean;
    static Connect(source: UnityEngine.Experimental.Director.Playable, target: UnityEngine.Experimental.Director.Playable, sourceOutputPort: number, targetInputPort: number): boolean;
    static Disconnect(target: UnityEngine.Experimental.Director.Playable, inputPort: number): any;
    GetInputs(): UnityEngine.Experimental.Director.Playable[];
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutputs(): UnityEngine.Experimental.Director.Playable[];
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    SetInputWeight(input: UnityEngine.Experimental.Director.Playable, weight: number): any;
    SetInputWeight(inputIndex: number, weight: number): boolean;
    GetInputWeight(index: number): number;
    Equals(p: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    static readonly Null: UnityEngine.Experimental.Director.Playable;
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
