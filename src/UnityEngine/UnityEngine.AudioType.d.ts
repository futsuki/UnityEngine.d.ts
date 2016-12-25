declare namespace UnityEngine {
  class AudioType {
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
    static UNKNOWN: UnityEngine.AudioType;
    static ACC: UnityEngine.AudioType;
    static AIFF: UnityEngine.AudioType;
    static IT: UnityEngine.AudioType;
    static MOD: UnityEngine.AudioType;
    static MPEG: UnityEngine.AudioType;
    static OGGVORBIS: UnityEngine.AudioType;
    static S3M: UnityEngine.AudioType;
    static WAV: UnityEngine.AudioType;
    static XM: UnityEngine.AudioType;
    static XMA: UnityEngine.AudioType;
    static VAG: UnityEngine.AudioType;
    static AUDIOQUEUE: UnityEngine.AudioType;
  }
}
