declare namespace UnityEngine.Rendering {
  class ShadowCastingMode {
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
    static Off: UnityEngine.Rendering.ShadowCastingMode;
    static On: UnityEngine.Rendering.ShadowCastingMode;
    static TwoSided: UnityEngine.Rendering.ShadowCastingMode;
    static ShadowsOnly: UnityEngine.Rendering.ShadowCastingMode;
  }
}
