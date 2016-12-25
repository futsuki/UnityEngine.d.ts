declare namespace UnityEngine.Rendering {
  class ReflectionCubemapCompression {
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
    static Uncompressed: UnityEngine.Rendering.ReflectionCubemapCompression;
    static Compressed: UnityEngine.Rendering.ReflectionCubemapCompression;
    static Auto: UnityEngine.Rendering.ReflectionCubemapCompression;
  }
}
