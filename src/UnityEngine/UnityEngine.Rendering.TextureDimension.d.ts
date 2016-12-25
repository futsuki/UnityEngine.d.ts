declare namespace UnityEngine.Rendering {
  class TextureDimension {
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
    static Unknown: UnityEngine.Rendering.TextureDimension;
    static None: UnityEngine.Rendering.TextureDimension;
    static Any: UnityEngine.Rendering.TextureDimension;
    static Tex2D: UnityEngine.Rendering.TextureDimension;
    static Tex3D: UnityEngine.Rendering.TextureDimension;
    static Cube: UnityEngine.Rendering.TextureDimension;
    static Tex2DArray: UnityEngine.Rendering.TextureDimension;
    static CubeArray: UnityEngine.Rendering.TextureDimension;
  }
}