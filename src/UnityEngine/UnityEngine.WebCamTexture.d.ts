declare namespace UnityEngine {
  class WebCamTexture {
    // constructors
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number);
    constructor(deviceName: string);
    constructor(requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(requestedWidth: number, requestedHeight: number);
    constructor();
    // methods
    Play(): any;
    Pause(): any;
    Stop(): any;
    MarkNonReadable(): any;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixels(): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(colors: UnityEngine.Color32[]): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly isPlaying: boolean;
    deviceName: string;
    requestedFPS: number;
    requestedWidth: number;
    requestedHeight: number;
    readonly isReadable: boolean;
    static readonly devices: UnityEngine.WebCamDevice[];
    readonly videoRotationAngle: number;
    readonly videoVerticallyMirrored: boolean;
    readonly didUpdateThisFrame: boolean;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    wrapMode: UnityEngine.TextureWrapMode;
    mipMapBias: number;
    readonly texelSize: UnityEngine.Vector2;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
