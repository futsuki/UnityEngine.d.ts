declare namespace UnityEngine.Experimental.Director {
  class CustomAnimationPlayable extends UnityEngine.Experimental.Director.ScriptPlayable {
    // constructors
    constructor();
    // methods
    Destroy(): void;
    PrepareFrame(info: UnityEngine.Experimental.Director.FrameData): void;
    OnSetTime(localTime: number): void;
    OnSetPlayState(newState: UnityEngine.Experimental.Director.PlayState): void;
    GetInput(inputPort: number): UnityEngine.Experimental.Director.Playable;
    GetOutput(outputPort: number): UnityEngine.Experimental.Director.Playable;
    GetInputWeight(index: number): number;
    SetInputWeight(inputIndex: number, weight: number): void;
    AddInput(input: UnityEngine.Experimental.Director.Playable): number;
    SetInput(source: UnityEngine.Experimental.Director.Playable, index: number): boolean;
    SetInputs(sources: any): boolean;
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
