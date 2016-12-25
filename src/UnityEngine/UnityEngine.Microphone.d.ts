declare namespace UnityEngine {
  class Microphone {
    // constructors
    constructor();
    // methods
    static Start(deviceName: string, loop: boolean, lengthSec: number, frequency: number): UnityEngine.AudioClip;
    static End(deviceName: string): any;
    static IsRecording(deviceName: string): boolean;
    static GetPosition(deviceName: string): number;
    static GetDeviceCaps(deviceName: string, minFreq: any, maxFreq: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly devices: string[];
    // fields
  }
}
