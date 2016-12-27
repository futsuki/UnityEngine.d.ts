declare namespace UnityEditor {
  class TextureImporterSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static Equal(a: UnityEditor.TextureImporterSettings, b: UnityEditor.TextureImporterSettings): boolean;
    CopyTo(target: UnityEditor.TextureImporterSettings): void;
    ApplyTextureType(type: UnityEditor.TextureImporterType, applyAll: boolean): void;
    ApplyTextureType(type: UnityEditor.TextureImporterType): void;
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
