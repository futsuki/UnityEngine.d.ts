declare namespace UnityEngine {
  class WebCamTexture extends UnityEngine.Texture {
    // constructors
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(deviceName: string, requestedWidth: number, requestedHeight: number);
    constructor(deviceName: string);
    constructor(requestedWidth: number, requestedHeight: number, requestedFPS: number);
    constructor(requestedWidth: number, requestedHeight: number);
    constructor();
    // methods
    Play(): void;
    Pause(): void;
    Stop(): void;
    MarkNonReadable(): void;
    GetPixel(x: number, y: number): UnityEngine.Color;
    GetPixels(): UnityEngine.Color[];
    GetPixels(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color[];
    GetPixels32(colors: UnityEngine.Color32[]): UnityEngine.Color32[];
    GetPixels32(): UnityEngine.Color32[];
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
    // fields
  }
}
