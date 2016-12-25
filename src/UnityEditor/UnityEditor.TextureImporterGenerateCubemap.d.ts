declare namespace UnityEditor {
  class TextureImporterGenerateCubemap {
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
    static None: UnityEditor.TextureImporterGenerateCubemap;
    static Spheremap: UnityEditor.TextureImporterGenerateCubemap;
    static Cylindrical: UnityEditor.TextureImporterGenerateCubemap;
    static SimpleSpheremap: UnityEditor.TextureImporterGenerateCubemap;
    static NiceSpheremap: UnityEditor.TextureImporterGenerateCubemap;
    static FullCubemap: UnityEditor.TextureImporterGenerateCubemap;
    static AutoCubemap: UnityEditor.TextureImporterGenerateCubemap;
  }
}
