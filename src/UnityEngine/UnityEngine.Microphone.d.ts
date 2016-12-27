declare namespace UnityEngine {
  class Microphone extends System.Object {
    // constructors
    constructor();
    // methods
    static Start(deviceName: string, loop: boolean, lengthSec: number, frequency: number): UnityEngine.AudioClip;
    static End(deviceName: string): void;
    static IsRecording(deviceName: string): boolean;
    static GetPosition(deviceName: string): number;
    static GetDeviceCaps(deviceName: string, minFreq: any, maxFreq: any): void;
    // properties
    static readonly devices: string[];
    // fields
  }
}
