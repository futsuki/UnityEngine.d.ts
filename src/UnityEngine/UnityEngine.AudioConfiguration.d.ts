declare namespace UnityEngine {
  class AudioConfiguration {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    speakerMode: UnityEngine.AudioSpeakerMode;
    dspBufferSize: number;
    sampleRate: number;
    numRealVoices: number;
    numVirtualVoices: number;
  }
}
