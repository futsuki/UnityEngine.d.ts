declare namespace UnityEditor.AudioSourceInspector {
  class AudioCurveType {
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
    static Volume: UnityEditor.AudioSourceInspector.AudioCurveType;
    static SpatialBlend: UnityEditor.AudioSourceInspector.AudioCurveType;
    static Lowpass: UnityEditor.AudioSourceInspector.AudioCurveType;
    static Spread: UnityEditor.AudioSourceInspector.AudioCurveType;
    static ReverbZoneMix: UnityEditor.AudioSourceInspector.AudioCurveType;
  }
}
