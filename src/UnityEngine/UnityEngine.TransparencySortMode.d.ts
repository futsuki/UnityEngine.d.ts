declare namespace UnityEngine {
  class TransparencySortMode {
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
    static Default: UnityEngine.TransparencySortMode;
    static Perspective: UnityEngine.TransparencySortMode;
    static Orthographic: UnityEngine.TransparencySortMode;
  }
}
