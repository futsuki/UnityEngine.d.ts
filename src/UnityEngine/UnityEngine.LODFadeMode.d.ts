declare namespace UnityEngine {
  class LODFadeMode {
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
    static None: UnityEngine.LODFadeMode;
    static CrossFade: UnityEngine.LODFadeMode;
    static SpeedTree: UnityEngine.LODFadeMode;
  }
}
