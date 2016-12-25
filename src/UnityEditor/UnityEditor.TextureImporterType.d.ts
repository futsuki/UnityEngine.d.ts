declare namespace UnityEditor {
  class TextureImporterType {
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
    static Default: UnityEditor.TextureImporterType;
    static Image: UnityEditor.TextureImporterType;
    static NormalMap: UnityEditor.TextureImporterType;
    static Bump: UnityEditor.TextureImporterType;
    static GUI: UnityEditor.TextureImporterType;
    static Sprite: UnityEditor.TextureImporterType;
    static Cursor: UnityEditor.TextureImporterType;
    static Cubemap: UnityEditor.TextureImporterType;
    static Reflection: UnityEditor.TextureImporterType;
    static Cookie: UnityEditor.TextureImporterType;
    static Lightmap: UnityEditor.TextureImporterType;
    static HDRI: UnityEditor.TextureImporterType;
    static Advanced: UnityEditor.TextureImporterType;
    static SingleChannel: UnityEditor.TextureImporterType;
  }
}
