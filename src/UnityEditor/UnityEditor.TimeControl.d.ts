declare namespace UnityEditor {
  class TimeControl extends System.Object {
    // constructors
    constructor();
    // methods
    DoTimeControl(rect: any): void;
    OnDisable(): void;
    Update(): void;
    // properties
    deltaTime: number;
    normalizedTime: number;
    playing: boolean;
    // fields
    currentTime: number;
    startTime: number;
    stopTime: number;
    playSelection: boolean;
    loop: boolean;
    playbackSpeed: number;
  }
}
