declare namespace UnityEngine {
  class AudioSettings {
    // constructors
    constructor();
    // methods
    static GetDSPBufferSize(bufferLength: any, numBuffers: any): any;
    static SetDSPBufferSize(bufferLength: number, numBuffers: number): any;
    static GetConfiguration(): UnityEngine.AudioConfiguration;
    static Reset(config: UnityEngine.AudioConfiguration): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly driverCapabilities: UnityEngine.AudioSpeakerMode;
    static speakerMode: UnityEngine.AudioSpeakerMode;
    static readonly dspTime: number;
    static outputSampleRate: number;
    static readonly driverCaps: UnityEngine.AudioSpeakerMode;
    // fields
  }
}
