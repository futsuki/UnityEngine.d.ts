declare namespace UnityEngine.Experimental.Director {
  class DirectorPlayer extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Play(pStruct: UnityEngine.Experimental.Director.Playable): void;
    Stop(): void;
    SetTime(time: number): void;
    GetTime(): number;
    SetTimeUpdateMode(mode: UnityEngine.Experimental.Director.DirectorUpdateMode): void;
    GetTimeUpdateMode(): UnityEngine.Experimental.Director.DirectorUpdateMode;
    // properties
    // fields
  }
}
