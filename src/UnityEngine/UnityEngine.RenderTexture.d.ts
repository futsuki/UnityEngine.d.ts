declare namespace UnityEngine {
  class RenderTexture extends UnityEngine.Texture {
    // constructors
    constructor(width: number, height: number, depth: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite);
    constructor(width: number, height: number, depth: number, format: UnityEngine.RenderTextureFormat);
    constructor(width: number, height: number, depth: number);
    // methods
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite, antiAliasing: number): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat, readWrite: UnityEngine.RenderTextureReadWrite): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number, format: UnityEngine.RenderTextureFormat): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number, depthBuffer: number): UnityEngine.RenderTexture;
    static GetTemporary(width: number, height: number): UnityEngine.RenderTexture;
    static ReleaseTemporary(temp: UnityEngine.RenderTexture): void;
    Create(): boolean;
    Release(): void;
    IsCreated(): boolean;
    DiscardContents(): void;
    DiscardContents(discardColor: boolean, discardDepth: boolean): void;
    MarkRestoreExpected(): void;
    GenerateMips(): void;
    GetNativeDepthBufferPtr(): any;
    SetGlobalShaderProperty(propertyName: string): void;
    GetTexelOffset(): UnityEngine.Vector2;
    static SupportsStencil(rt: UnityEngine.RenderTexture): boolean;
    SetBorderColor(color: UnityEngine.Color): void;
    // properties
    width: number;
    height: number;
    depth: number;
    isPowerOfTwo: boolean;
    readonly sRGB: boolean;
    format: UnityEngine.RenderTextureFormat;
    useMipMap: boolean;
    autoGenerateMips: boolean;
    dimension: UnityEngine.Rendering.TextureDimension;
    isCubemap: boolean;
    isVolume: boolean;
    volumeDepth: number;
    antiAliasing: number;
    enableRandomWrite: boolean;
    readonly colorBuffer: UnityEngine.RenderBuffer;
    readonly depthBuffer: UnityEngine.RenderBuffer;
    static active: UnityEngine.RenderTexture;
    static enabled: boolean;
    generateMips: boolean;
    // fields
  }
}
