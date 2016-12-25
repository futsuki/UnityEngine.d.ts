declare namespace UnityEngine.VR.WSA {
  class SurfaceChange {
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
    static Added: UnityEngine.VR.WSA.SurfaceChange;
    static Updated: UnityEngine.VR.WSA.SurfaceChange;
    static Removed: UnityEngine.VR.WSA.SurfaceChange;
  }
}
