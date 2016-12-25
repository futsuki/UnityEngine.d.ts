declare namespace UnityEngine {
  class AudioSourceCurveType {
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
    static CustomRolloff: UnityEngine.AudioSourceCurveType;
    static SpatialBlend: UnityEngine.AudioSourceCurveType;
    static ReverbZoneMix: UnityEngine.AudioSourceCurveType;
    static Spread: UnityEngine.AudioSourceCurveType;
  }
}
