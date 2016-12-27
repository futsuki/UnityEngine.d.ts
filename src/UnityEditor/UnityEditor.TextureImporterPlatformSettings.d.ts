declare namespace UnityEditor {
  class TextureImporterPlatformSettings extends System.Object {
    // constructors
    constructor();
    // methods
    CopyTo(target: UnityEditor.TextureImporterPlatformSettings): void;
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
