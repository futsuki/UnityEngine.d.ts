declare namespace UnityEngine.Experimental.Director {
  class CustomAnimationPlayable {
    // constructors
    constructor();
    // methods
    Destroy(): any;
    PrepareFrame(info: UnityEngine.Experimental.Director.FrameData): any;
    OnSetTime(localTime: number): any;
    OnSetPlayState(newState: UnityEngine.Experimental.Director.PlayState): any;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): any;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
    RemoveInput(index: number): boolean;
    RemoveAllInputs(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly inputCount: number;
    readonly outputCount: number;
    state: UnityEngine.Experimental.Director.PlayState;
    time: number;
    duration: number;
    // fields
  }
}
