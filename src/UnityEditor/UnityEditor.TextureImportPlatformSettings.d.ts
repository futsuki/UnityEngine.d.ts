declare namespace UnityEditor {
  class TextureImportPlatformSettings extends System.Object {
    // constructors
    constructor(name: string, target: UnityEditor.BuildTarget, inspector: UnityEditor.TextureImporterInspector);
    // methods
    SetOverriddenForAll(overridden: boolean): void;
    SetMaxTextureSizeForAll(maxTextureSize: number): void;
    SetTextureCompressionForAll(textureCompression: UnityEditor.TextureImporterCompression): void;
    SetCompressionQualityForAll(quality: number): void;
    SetCrunchedCompressionForAll(crunched: boolean): void;
    SetTextureFormatForAll(format: UnityEditor.TextureImporterFormat): void;
    SetAllowsAlphaSplitForAll(value: boolean): void;
    SupportsFormat(format: UnityEditor.TextureImporterFormat, importer: UnityEditor.TextureImporter): boolean;
    GetSettings(importer: UnityEditor.TextureImporter): UnityEditor.TextureImporterSettings;
    SetChanged(): void;
    HasChanged(): boolean;
    Sync(): void;
    Apply(): void;
    // properties
    readonly platformTextureSettings: UnityEditor.TextureImporterPlatformSettings;
    readonly name: string;
    readonly overridden: boolean;
    readonly overriddenIsDifferent: boolean;
    readonly allAreOverridden: boolean;
    readonly maxTextureSize: number;
    readonly maxTextureSizeIsDifferent: boolean;
    readonly textureCompression: UnityEditor.TextureImporterCompression;
    readonly textureCompressionIsDifferent: boolean;
    readonly compressionQuality: number;
    readonly compressionQualityIsDifferent: boolean;
    readonly crunchedCompression: boolean;
    readonly crunchedCompressionIsDifferent: boolean;
    readonly format: UnityEditor.TextureImporterFormat;
    readonly textureFormatIsDifferent: boolean;
    readonly allowsAlphaSplitting: boolean;
    readonly allowsAlphaSplitIsDifferent: boolean;
    readonly importers: UnityEditor.TextureImporter[];
    readonly isDefault: boolean;
    // fields
    m_Target: UnityEditor.BuildTarget;
    static kTextureFormatsValueWiiU: number[];
    static kTextureFormatsValueApplePVR: number[];
    static kTextureFormatsValueAndroid: number[];
    static kTextureFormatsValueTizen: number[];
    static kTextureFormatsValueSTV: number[];
    static kTextureFormatsValueWebGL: number[];
    static kNormalFormatsValueDefault: number[];
    static kTextureFormatsValueDefault: number[];
    static kTextureFormatsValueSingleChannel: number[];
  }
}
