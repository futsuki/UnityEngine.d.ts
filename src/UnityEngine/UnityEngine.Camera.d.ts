declare namespace UnityEngine {
  class Camera extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    SetTargetBuffers(colorBuffer: UnityEngine.RenderBuffer, depthBuffer: UnityEngine.RenderBuffer): void;
    SetTargetBuffers(colorBuffer: UnityEngine.RenderBuffer[], depthBuffer: UnityEngine.RenderBuffer): void;
    ResetWorldToCameraMatrix(): void;
    ResetProjectionMatrix(): void;
    ResetAspect(): void;
    ResetFieldOfView(): void;
    GetStereoViewMatrices(): UnityEngine.Matrix4x4[];
    GetStereoViewMatrix(eye: UnityEngine.Camera.StereoscopicEye): UnityEngine.Matrix4x4;
    SetStereoViewMatrices(leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4): void;
    SetStereoViewMatrix(eye: UnityEngine.Camera.StereoscopicEye, matrix: UnityEngine.Matrix4x4): void;
    ResetStereoViewMatrices(): void;
    GetStereoProjectionMatrices(): UnityEngine.Matrix4x4[];
    GetStereoProjectionMatrix(eye: UnityEngine.Camera.StereoscopicEye): UnityEngine.Matrix4x4;
    SetStereoProjectionMatrix(eye: UnityEngine.Camera.StereoscopicEye, matrix: UnityEngine.Matrix4x4): void;
    SetStereoProjectionMatrices(leftMatrix: UnityEngine.Matrix4x4, rightMatrix: UnityEngine.Matrix4x4): void;
    CalculateFrustumCorners(viewport: UnityEngine.Rect, z: number, eye: UnityEngine.Camera.MonoOrStereoscopicEye, outCorners: UnityEngine.Vector3[]): void;
    ResetStereoProjectionMatrices(): void;
    WorldToScreenPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    WorldToViewportPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportToWorldPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ScreenToWorldPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ScreenToViewportPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportToScreenPoint(position: UnityEngine.Vector3): UnityEngine.Vector3;
    ViewportPointToRay(position: UnityEngine.Vector3): UnityEngine.Ray;
    ScreenPointToRay(position: UnityEngine.Vector3): UnityEngine.Ray;
    static GetAllCameras(cameras: UnityEngine.Camera[]): number;
    Render(): void;
    RenderWithShader(shader: UnityEngine.Shader, replacementTag: string): void;
    SetReplacementShader(shader: UnityEngine.Shader, replacementTag: string): void;
    ResetReplacementShader(): void;
    ResetCullingMatrix(): void;
    RenderDontRestore(): void;
    static SetupCurrent(cur: UnityEngine.Camera): void;
    RenderToCubemap(cubemap: UnityEngine.Cubemap): boolean;
    RenderToCubemap(cubemap: UnityEngine.Cubemap, faceMask: number): boolean;
    RenderToCubemap(cubemap: UnityEngine.RenderTexture): boolean;
    RenderToCubemap(cubemap: UnityEngine.RenderTexture, faceMask: number): boolean;
    CopyFrom(other: UnityEngine.Camera): void;
    AddCommandBuffer(evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffer(evt: UnityEngine.Rendering.CameraEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffers(evt: UnityEngine.Rendering.CameraEvent): void;
    RemoveAllCommandBuffers(): void;
    GetCommandBuffers(evt: UnityEngine.Rendering.CameraEvent): UnityEngine.Rendering.CommandBuffer[];
    CalculateObliqueMatrix(clipPlane: UnityEngine.Vector4): UnityEngine.Matrix4x4;
    GetScreenWidth(): number;
    GetScreenHeight(): number;
    DoClear(): void;
    // properties
    fov: number;
    near: number;
    far: number;
    fieldOfView: number;
    nearClipPlane: number;
    farClipPlane: number;
    renderingPath: UnityEngine.RenderingPath;
    readonly actualRenderingPath: UnityEngine.RenderingPath;
    hdr: boolean;
    orthographicSize: number;
    orthographic: boolean;
    opaqueSortMode: UnityEngine.Rendering.OpaqueSortMode;
    transparencySortMode: UnityEngine.TransparencySortMode;
    depth: number;
    aspect: number;
    cullingMask: number;
    eventMask: number;
    backgroundColor: UnityEngine.Color;
    rect: UnityEngine.Rect;
    pixelRect: UnityEngine.Rect;
    targetTexture: UnityEngine.RenderTexture;
    readonly pixelWidth: number;
    readonly pixelHeight: number;
    readonly cameraToWorldMatrix: UnityEngine.Matrix4x4;
    worldToCameraMatrix: UnityEngine.Matrix4x4;
    projectionMatrix: UnityEngine.Matrix4x4;
    nonJitteredProjectionMatrix: UnityEngine.Matrix4x4;
    useJitteredProjectionMatrixForTransparentRendering: boolean;
    readonly velocity: UnityEngine.Vector3;
    clearFlags: UnityEngine.CameraClearFlags;
    readonly stereoEnabled: boolean;
    stereoSeparation: number;
    stereoConvergence: number;
    cameraType: UnityEngine.CameraType;
    stereoMirrorMode: boolean;
    stereoTargetEye: UnityEngine.StereoTargetEyeMask;
    readonly stereoActiveEye: UnityEngine.Camera.MonoOrStereoscopicEye;
    targetDisplay: number;
    static readonly main: UnityEngine.Camera;
    static readonly current: UnityEngine.Camera;
    static readonly allCameras: UnityEngine.Camera[];
    static readonly allCamerasCount: number;
    useOcclusionCulling: boolean;
    cullingMatrix: UnityEngine.Matrix4x4;
    layerCullDistances: number[];
    layerCullSpherical: boolean;
    depthTextureMode: UnityEngine.DepthTextureMode;
    clearStencilAfterLightingPass: boolean;
    readonly commandBufferCount: number;
    isOrthoGraphic: boolean;
    static readonly mainCamera: UnityEngine.Camera;
    // fields
    static onPreCull: ((cam: UnityEngine.Camera) => void);
    static onPreRender: ((cam: UnityEngine.Camera) => void);
    static onPostRender: ((cam: UnityEngine.Camera) => void);
  }
}
