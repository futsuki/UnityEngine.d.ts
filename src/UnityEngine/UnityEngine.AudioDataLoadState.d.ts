declare namespace UnityEngine {
  class AudioDataLoadState {
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
    static Unloaded: UnityEngine.AudioDataLoadState;
    static Loading: UnityEngine.AudioDataLoadState;
    static Loaded: UnityEngine.AudioDataLoadState;
    static Failed: UnityEngine.AudioDataLoadState;
  }
}
