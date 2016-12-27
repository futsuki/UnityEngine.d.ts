declare namespace UnityEngine {
  class ReflectionProbe extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    RenderProbe(targetTexture: UnityEngine.RenderTexture): number;
    RenderProbe(): number;
    IsFinishedRendering(renderId: number): boolean;
    static BlendCubemap(src: UnityEngine.Texture, dst: UnityEngine.Texture, blend: number, target: UnityEngine.RenderTexture): boolean;
    // properties
    type: UnityEngine.Rendering.ReflectionProbeType;
    hdr: boolean;
    size: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    nearClipPlane: number;
    farClipPlane: number;
    shadowDistance: number;
    resolution: number;
    cullingMask: number;
    clearFlags: UnityEngine.Rendering.ReflectionProbeClearFlags;
    backgroundColor: UnityEngine.Color;
    intensity: number;
    blendDistance: number;
    boxProjection: boolean;
    readonly bounds: UnityEngine.Bounds;
    mode: UnityEngine.Rendering.ReflectionProbeMode;
    importance: number;
    refreshMode: UnityEngine.Rendering.ReflectionProbeRefreshMode;
    timeSlicingMode: UnityEngine.Rendering.ReflectionProbeTimeSlicingMode;
    bakedTexture: UnityEngine.Texture;
    customBakedTexture: UnityEngine.Texture;
    readonly texture: UnityEngine.Texture;
    static readonly minBakedCubemapResolution: number;
    static readonly maxBakedCubemapResolution: number;
    // fields
  }
}
