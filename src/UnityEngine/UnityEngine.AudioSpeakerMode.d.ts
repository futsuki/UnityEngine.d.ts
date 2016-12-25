declare namespace UnityEngine {
  class AudioSpeakerMode {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Raw: UnityEngine.AudioSpeakerMode;
    static Mono: UnityEngine.AudioSpeakerMode;
    static Stereo: UnityEngine.AudioSpeakerMode;
    static Quad: UnityEngine.AudioSpeakerMode;
    static Surround: UnityEngine.AudioSpeakerMode;
    static Mode5point1: UnityEngine.AudioSpeakerMode;
    static Mode7point1: UnityEngine.AudioSpeakerMode;
    static Prologic: UnityEngine.AudioSpeakerMode;
  }
}
