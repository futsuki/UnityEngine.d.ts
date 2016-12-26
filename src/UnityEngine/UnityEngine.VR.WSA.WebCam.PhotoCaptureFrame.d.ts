declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCaptureFrame {
    // constructors
    private constructor();
    // methods
    TryGetCameraToWorldMatrix(cameraToWorldMatrix: any): boolean;
    TryGetProjectionMatrix(projectionMatrix: any): boolean;
    TryGetProjectionMatrix(nearClipPlane: number, farClipPlane: number, projectionMatrix: any): boolean;
    UploadImageDataToTexture(targetTexture: UnityEngine.Texture2D): void;
    GetUnsafePointerToBuffer(): any;
    CopyRawImageDataIntoBuffer(byteBuffer: any): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly dataLength: number;
    readonly hasLocationData: boolean;
    readonly pixelFormat: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    // fields
  }
}
