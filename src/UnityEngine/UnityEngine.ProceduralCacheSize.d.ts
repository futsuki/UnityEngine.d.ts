declare namespace UnityEngine {
  class ProceduralCacheSize {
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
    static Tiny: UnityEngine.ProceduralCacheSize;
    static Medium: UnityEngine.ProceduralCacheSize;
    static Heavy: UnityEngine.ProceduralCacheSize;
    static NoLimit: UnityEngine.ProceduralCacheSize;
    static None: UnityEngine.ProceduralCacheSize;
  }
}
