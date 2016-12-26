declare namespace UnityEditor {
  class TextureUtil {
    // constructors
    constructor();
    // methods
    static GetStorageMemorySize(t: any): number;
    static GetRuntimeMemorySize(t: any): number;
    static IsNonPowerOfTwo(t: any): boolean;
    static GetUsageMode(t: any): UnityEditor.TextureUsageMode;
    static GetBytesFromTextureFormat(inFormat: any): number;
    static GetRowBytesFromWidthAndFormat(width: number, format: any): number;
    static IsValidTextureFormat(format: any): boolean;
    static IsCompressedTextureFormat(format: any): boolean;
    static GetTextureFormat(texture: any): any;
    static IsAlphaOnlyTextureFormat(format: any): boolean;
    static HasAlphaTextureFormat(format: any): boolean;
    static GetTextureFormatString(format: any): string;
    static GetTextureColorSpaceString(texture: any): string;
    static ConvertToAlphaTextureFormat(format: any): any;
    static IsDepthRTFormat(format: any): boolean;
    static HasMipMap(t: any): boolean;
    static GetGPUWidth(t: any): number;
    static GetGPUHeight(t: any): number;
    static GetMipmapCount(t: any): number;
    static GetLinearSampled(t: any): boolean;
    static GetDefaultCompressionQuality(): number;
    static GetTexelSizeVector(t: any): any;
    static GetSourceTexture(cubemapRef: any, face: any): any;
    static SetSourceTexture(cubemapRef: any, face: any, tex: any): void;
    static CopyTextureIntoCubemapFace(textureRef: any, cubemapRef: any, face: any): void;
    static CopyCubemapFaceIntoTexture(cubemapRef: any, face: any, textureRef: any): void;
    static ReformatCubemap(cubemap: any, width: number, height: number, textureFormat: any, useMipmap: boolean, linear: boolean): boolean;
    static ReformatTexture(texture: any, width: number, height: number, textureFormat: any, useMipmap: boolean, linear: boolean): boolean;
    static SetAnisoLevelNoDirty(tex: any, level: number): void;
    static SetWrapModeNoDirty(tex: any, mode: any): void;
    static SetMipMapBiasNoDirty(tex: any, bias: number): void;
    static SetFilterModeNoDirty(tex: any, mode: any): void;
    static DoesTextureStillNeedToBeCompressed(assetPath: string): boolean;
    static IsCubemapReadable(cubemapRef: any): boolean;
    static MarkCubemapReadable(cubemapRef: any, readable: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
