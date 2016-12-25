declare namespace UnityEngine {
  class FFTWindow {
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
    static Rectangular: UnityEngine.FFTWindow;
    static Triangle: UnityEngine.FFTWindow;
    static Hamming: UnityEngine.FFTWindow;
    static Hanning: UnityEngine.FFTWindow;
    static Blackman: UnityEngine.FFTWindow;
    static BlackmanHarris: UnityEngine.FFTWindow;
  }
}
