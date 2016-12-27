declare namespace UnityEngine.VR.WSA.WebCam {
  class PhotoCaptureFrame extends System.Object {
    // constructors
    protected constructor();
    // methods
    TryGetCameraToWorldMatrix(cameraToWorldMatrix: any): boolean;
    TryGetProjectionMatrix(projectionMatrix: any): boolean;
    TryGetProjectionMatrix(nearClipPlane: number, farClipPlane: number, projectionMatrix: any): boolean;
    UploadImageDataToTexture(targetTexture: UnityEngine.Texture2D): void;
    GetUnsafePointerToBuffer(): any;
    CopyRawImageDataIntoBuffer(byteBuffer: number[]): void;
    Dispose(): void;
    // properties
    readonly dataLength: number;
    readonly hasLocationData: boolean;
    readonly pixelFormat: UnityEngine.VR.WSA.WebCam.CapturePixelFormat;
    // fields
  }
}
