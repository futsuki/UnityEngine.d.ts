declare namespace UnityEngine.Rendering {
  class CopyTextureSupport {
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
    static None: UnityEngine.Rendering.CopyTextureSupport;
    static Basic: UnityEngine.Rendering.CopyTextureSupport;
    static Copy3D: UnityEngine.Rendering.CopyTextureSupport;
    static DifferentTypes: UnityEngine.Rendering.CopyTextureSupport;
    static TextureToRT: UnityEngine.Rendering.CopyTextureSupport;
    static RTToTexture: UnityEngine.Rendering.CopyTextureSupport;
  }
}
