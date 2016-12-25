declare namespace UnityEditor {
  class TextureImporterSettings {
    // constructors
    constructor();
    // methods
    static Equal(a: UnityEditor.TextureImporterSettings, b: UnityEditor.TextureImporterSettings): boolean;
    CopyTo(target: UnityEditor.TextureImporterSettings): any;
    ApplyTextureType(type: UnityEditor.TextureImporterType, applyAll: boolean): any;
    ApplyTextureType(type: UnityEditor.TextureImporterType): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    textureType: UnityEditor.TextureImporterType;
    textureShape: UnityEditor.TextureImporterShape;
    mipmapFilter: UnityEditor.TextureImporterMipFilter;
    mipmapEnabled: boolean;
    generateMipsInLinearSpace: boolean;
    sRGBTexture: boolean;
    fadeOut: boolean;
    borderMipmap: boolean;
    mipmapFadeDistanceStart: number;
    mipmapFadeDistanceEnd: number;
    convertToNormalMap: boolean;
    heightmapScale: number;
    normalMapFilter: UnityEditor.TextureImporterNormalFilter;
    alphaSource: UnityEditor.TextureImporterAlphaSource;
    readable: boolean;
    npotScale: UnityEditor.TextureImporterNPOTScale;
    generateCubemap: UnityEditor.TextureImporterGenerateCubemap;
    cubemapConvolution: UnityEditor.TextureImporterCubemapConvolution;
    seamlessCubemap: boolean;
    filterMode: any;
    aniso: number;
    mipmapBias: number;
    wrapMode: any;
    alphaIsTransparency: boolean;
    spriteMode: number;
    spritePixelsPerUnit: number;
    spritePixelsToUnits: number;
    spriteTessellationDetail: number;
    spriteExtrude: number;
    spriteMeshType: any;
    spriteAlignment: number;
    spritePivot: any;
    spriteBorder: any;
    linearTexture: boolean;
    normalMap: boolean;
    textureFormat: UnityEditor.TextureImporterFormat;
    maxTextureSize: number;
    lightmap: boolean;
    rgbm: UnityEditor.TextureImporterRGBMMode;
    grayscaleToAlpha: boolean;
    cubemapConvolutionSteps: number;
    cubemapConvolutionExponent: number;
    compressionQuality: number;
    // fields
  }
}
