declare namespace UnityEngine {
  class RenderTextureFormat {
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
    static ARGB32: UnityEngine.RenderTextureFormat;
    static Depth: UnityEngine.RenderTextureFormat;
    static ARGBHalf: UnityEngine.RenderTextureFormat;
    static Shadowmap: UnityEngine.RenderTextureFormat;
    static RGB565: UnityEngine.RenderTextureFormat;
    static ARGB4444: UnityEngine.RenderTextureFormat;
    static ARGB1555: UnityEngine.RenderTextureFormat;
    static Default: UnityEngine.RenderTextureFormat;
    static ARGB2101010: UnityEngine.RenderTextureFormat;
    static DefaultHDR: UnityEngine.RenderTextureFormat;
    static ARGBFloat: UnityEngine.RenderTextureFormat;
    static RGFloat: UnityEngine.RenderTextureFormat;
    static RGHalf: UnityEngine.RenderTextureFormat;
    static RFloat: UnityEngine.RenderTextureFormat;
    static RHalf: UnityEngine.RenderTextureFormat;
    static R8: UnityEngine.RenderTextureFormat;
    static ARGBInt: UnityEngine.RenderTextureFormat;
    static RGInt: UnityEngine.RenderTextureFormat;
    static RInt: UnityEngine.RenderTextureFormat;
    static BGRA32: UnityEngine.RenderTextureFormat;
    static RGB111110Float: UnityEngine.RenderTextureFormat;
  }
}
