declare namespace UnityEditor {
  class TextureImporterPlatformSettings {
    // constructors
    constructor();
    // methods
    CopyTo(target: UnityEditor.TextureImporterPlatformSettings): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    name: string;
    overridden: boolean;
    maxTextureSize: number;
    format: UnityEditor.TextureImporterFormat;
    textureCompression: UnityEditor.TextureImporterCompression;
    compressionQuality: number;
    crunchedCompression: boolean;
    allowsAlphaSplitting: boolean;
    // fields
  }
}
