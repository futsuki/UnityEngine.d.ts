declare namespace UnityEditor {
  class FontRenderingMode {
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
    static Smooth: UnityEditor.FontRenderingMode;
    static HintedSmooth: UnityEditor.FontRenderingMode;
    static HintedRaster: UnityEditor.FontRenderingMode;
    static OSDefault: UnityEditor.FontRenderingMode;
  }
}
