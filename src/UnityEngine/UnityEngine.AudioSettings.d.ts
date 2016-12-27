declare namespace UnityEngine {
  class AudioSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static GetDSPBufferSize(bufferLength: any, numBuffers: any): void;
    static SetDSPBufferSize(bufferLength: number, numBuffers: number): void;
    static GetConfiguration(): UnityEngine.AudioConfiguration;
    static Reset(config: UnityEngine.AudioConfiguration): boolean;
    // properties
    static readonly driverCapabilities: UnityEngine.AudioSpeakerMode;
    static speakerMode: UnityEngine.AudioSpeakerMode;
    static readonly dspTime: number;
    static outputSampleRate: number;
    static readonly driverCaps: UnityEngine.AudioSpeakerMode;
    // fields
  }
}
