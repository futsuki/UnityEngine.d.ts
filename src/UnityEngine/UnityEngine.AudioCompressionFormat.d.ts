declare namespace UnityEngine {
  class AudioCompressionFormat {
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
    static PCM: UnityEngine.AudioCompressionFormat;
    static Vorbis: UnityEngine.AudioCompressionFormat;
    static ADPCM: UnityEngine.AudioCompressionFormat;
    static MP3: UnityEngine.AudioCompressionFormat;
    static VAG: UnityEngine.AudioCompressionFormat;
    static HEVAG: UnityEngine.AudioCompressionFormat;
    static XMA: UnityEngine.AudioCompressionFormat;
    static AAC: UnityEngine.AudioCompressionFormat;
    static GCADPCM: UnityEngine.AudioCompressionFormat;
    static ATRAC9: UnityEngine.AudioCompressionFormat;
  }
}
