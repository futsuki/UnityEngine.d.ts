declare namespace UnityEngine {
  class SystemInfo {
    // constructors
    constructor();
    // methods
    static SupportsRenderTextureFormat(format: UnityEngine.RenderTextureFormat): boolean;
    static SupportsTextureFormat(format: UnityEngine.TextureFormat): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly operatingSystem: string;
    static readonly operatingSystemFamily: UnityEngine.OperatingSystemFamily;
    static readonly processorType: string;
    static readonly processorFrequency: number;
    static readonly processorCount: number;
    static readonly systemMemorySize: number;
    static readonly graphicsMemorySize: number;
    static readonly graphicsDeviceName: string;
    static readonly graphicsDeviceVendor: string;
    static readonly graphicsDeviceID: number;
    static readonly graphicsDeviceVendorID: number;
    static readonly graphicsDeviceType: UnityEngine.Rendering.GraphicsDeviceType;
    static readonly graphicsDeviceVersion: string;
    static readonly graphicsShaderLevel: number;
    static readonly graphicsPixelFillrate: number;
    static readonly supportsVertexPrograms: boolean;
    static readonly graphicsMultiThreaded: boolean;
    static readonly supportsShadows: boolean;
    static readonly supportsRawShadowDepthSampling: boolean;
    static readonly supportsRenderTextures: boolean;
    static readonly supportsMotionVectors: boolean;
    static readonly supportsRenderToCubemap: boolean;
    static readonly supportsImageEffects: boolean;
    static readonly supports3DTextures: boolean;
    static readonly supports2DArrayTextures: boolean;
    static readonly supportsCubemapArrayTextures: boolean;
    static readonly copyTextureSupport: UnityEngine.Rendering.CopyTextureSupport;
    static readonly supportsComputeShaders: boolean;
    static readonly supportsInstancing: boolean;
    static readonly supportsSparseTextures: boolean;
    static readonly supportedRenderTargetCount: number;
    static readonly usesReversedZBuffer: boolean;
    static readonly supportsStencil: number;
    static readonly npotSupport: UnityEngine.NPOTSupport;
    static readonly deviceUniqueIdentifier: string;
    static readonly deviceName: string;
    static readonly deviceModel: string;
    static readonly supportsAccelerometer: boolean;
    static readonly supportsGyroscope: boolean;
    static readonly supportsLocationService: boolean;
    static readonly supportsVibration: boolean;
    static readonly supportsAudio: boolean;
    static readonly deviceType: UnityEngine.DeviceType;
    static readonly maxTextureSize: number;
    // fields
    static unsupportedIdentifier: string;
  }
}
