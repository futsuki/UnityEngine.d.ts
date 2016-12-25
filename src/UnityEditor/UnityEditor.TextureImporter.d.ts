declare namespace UnityEditor {
  class TextureImporter {
    // constructors
    constructor();
    // methods
    GetAllowsAlphaSplitting(): boolean;
    SetAllowsAlphaSplitting(flag: boolean): any;
    GetPlatformTextureSettings(platform: string, maxTextureSize: any, textureFormat: any, compressionQuality: any, etc1AlphaSplitEnabled: any): boolean;
    GetPlatformTextureSettings(platform: string, maxTextureSize: any, textureFormat: any, compressionQuality: any): boolean;
    GetPlatformTextureSettings(platform: string, maxTextureSize: any, textureFormat: any): boolean;
    GetPlatformTextureSettings(platform: string): UnityEditor.TextureImporterPlatformSettings;
    GetDefaultPlatformTextureSettings(): UnityEditor.TextureImporterPlatformSettings;
    GetAutomaticFormat(platform: string): UnityEditor.TextureImporterFormat;
    SetPlatformTextureSettings(platform: string, maxTextureSize: number, textureFormat: UnityEditor.TextureImporterFormat, compressionQuality: number, allowsAlphaSplit: boolean): any;
    SetPlatformTextureSettings(platform: string, maxTextureSize: number, textureFormat: UnityEditor.TextureImporterFormat): any;
    SetPlatformTextureSettings(platform: string, maxTextureSize: number, textureFormat: UnityEditor.TextureImporterFormat, allowsAlphaSplit: boolean): any;
    SetPlatformTextureSettings(platformSettings: UnityEditor.TextureImporterPlatformSettings): any;
    ClearPlatformTextureSettings(platform: string): any;
    DoesSourceTextureHaveAlpha(): boolean;
    DoesSourceTextureHaveColor(): boolean;
    ReadTextureSettings(dest: UnityEditor.TextureImporterSettings): any;
    SetTextureSettings(src: UnityEditor.TextureImporterSettings): any;
    ReadTextureImportInstructions(target: UnityEditor.BuildTarget, desiredFormat: any, colorSpace: any, compressionQuality: any): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    textureFormat: UnityEditor.TextureImporterFormat;
    maxTextureSize: number;
    compressionQuality: number;
    crunchedCompression: boolean;
    allowAlphaSplitting: boolean;
    textureCompression: UnityEditor.TextureImporterCompression;
    alphaSource: UnityEditor.TextureImporterAlphaSource;
    grayscaleToAlpha: boolean;
    generateCubemap: UnityEditor.TextureImporterGenerateCubemap;
    npotScale: UnityEditor.TextureImporterNPOTScale;
    isReadable: boolean;
    mipmapEnabled: boolean;
    borderMipmap: boolean;
    sRGBTexture: boolean;
    mipmapFilter: UnityEditor.TextureImporterMipFilter;
    fadeout: boolean;
    mipmapFadeDistanceStart: number;
    mipmapFadeDistanceEnd: number;
    generateMipsInLinearSpace: boolean;
    correctGamma: boolean;
    linearTexture: boolean;
    normalmap: boolean;
    lightmap: boolean;
    convertToNormalmap: boolean;
    normalmapFilter: UnityEditor.TextureImporterNormalFilter;
    heightmapScale: number;
    anisoLevel: number;
    filterMode: any;
    wrapMode: any;
    mipMapBias: number;
    alphaIsTransparency: boolean;
    readonly qualifiesForSpritePacking: boolean;
    spriteImportMode: UnityEditor.SpriteImportMode;
    spritesheet: UnityEditor.SpriteMetaData[];
    spritePackingTag: string;
    spritePixelsPerUnit: number;
    spritePixelsToUnits: number;
    spritePivot: any;
    spriteBorder: any;
    textureType: UnityEditor.TextureImporterType;
    textureShape: UnityEditor.TextureImporterShape;
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
