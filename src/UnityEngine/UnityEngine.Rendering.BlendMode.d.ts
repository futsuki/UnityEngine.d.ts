declare namespace UnityEngine.Rendering {
  class BlendMode {
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
    static Zero: UnityEngine.Rendering.BlendMode;
    static One: UnityEngine.Rendering.BlendMode;
    static DstColor: UnityEngine.Rendering.BlendMode;
    static SrcColor: UnityEngine.Rendering.BlendMode;
    static OneMinusDstColor: UnityEngine.Rendering.BlendMode;
    static SrcAlpha: UnityEngine.Rendering.BlendMode;
    static OneMinusSrcColor: UnityEngine.Rendering.BlendMode;
    static DstAlpha: UnityEngine.Rendering.BlendMode;
    static OneMinusDstAlpha: UnityEngine.Rendering.BlendMode;
    static SrcAlphaSaturate: UnityEngine.Rendering.BlendMode;
    static OneMinusSrcAlpha: UnityEngine.Rendering.BlendMode;
  }
}
