declare namespace UnityEditor {
  class TimeControl {
    // constructors
    constructor();
    // methods
    DoTimeControl(rect: any): any;
    OnDisable(): any;
    Update(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
