declare namespace UnityEditor {
  class TextureUsageMode {
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
    static Default: UnityEditor.TextureUsageMode;
    static LightmapDoubleLDR: UnityEditor.TextureUsageMode;
    static LightmapRGBM: UnityEditor.TextureUsageMode;
    static NormalmapDXT5nm: UnityEditor.TextureUsageMode;
    static NormalmapPlain: UnityEditor.TextureUsageMode;
    static RGBMEncoded: UnityEditor.TextureUsageMode;
    static AlwaysPadded: UnityEditor.TextureUsageMode;
  }
}
