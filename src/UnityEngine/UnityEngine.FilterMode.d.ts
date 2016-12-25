declare namespace UnityEngine {
  class FilterMode {
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
    static Point: UnityEngine.FilterMode;
    static Bilinear: UnityEngine.FilterMode;
    static Trilinear: UnityEngine.FilterMode;
  }
}
