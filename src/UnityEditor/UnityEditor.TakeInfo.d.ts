declare namespace UnityEditor {
  class TakeInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    name: string;
    defaultClipName: string;
    startTime: number;
    stopTime: number;
    bakeStartTime: number;
    bakeStopTime: number;
    sampleRate: number;
  }
}
