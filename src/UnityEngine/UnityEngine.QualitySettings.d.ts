declare namespace UnityEngine {
  class QualitySettings extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static GetQualityLevel(): number;
    static SetQualityLevel(index: number, applyExpensiveChanges: boolean): void;
    static SetQualityLevel(index: number): void;
    static IncreaseLevel(applyExpensiveChanges: boolean): void;
    static IncreaseLevel(): void;
    static DecreaseLevel(applyExpensiveChanges: boolean): void;
    static DecreaseLevel(): void;
    // properties
    static readonly names: string[];
    static currentLevel: UnityEngine.QualityLevel;
    static pixelLightCount: number;
    static shadows: UnityEngine.ShadowQuality;
    static shadowProjection: UnityEngine.ShadowProjection;
    static shadowCascades: number;
    static shadowDistance: number;
    static shadowResolution: UnityEngine.ShadowResolution;
    static shadowNearPlaneOffset: number;
    static shadowCascade2Split: number;
    static shadowCascade4Split: UnityEngine.Vector3;
    static masterTextureLimit: number;
    static anisotropicFiltering: UnityEngine.AnisotropicFiltering;
    static lodBias: number;
    static maximumLODLevel: number;
    static particleRaycastBudget: number;
    static softParticles: boolean;
    static softVegetation: boolean;
    static realtimeReflectionProbes: boolean;
    static billboardsFaceCameraPosition: boolean;
    static maxQueuedFrames: number;
    static vSyncCount: number;
    static antiAliasing: number;
    static readonly desiredColorSpace: UnityEngine.ColorSpace;
    static readonly activeColorSpace: UnityEngine.ColorSpace;
    static blendWeights: UnityEngine.BlendWeights;
    static asyncUploadTimeSlice: number;
    static asyncUploadBufferSize: number;
    // fields
  }
}
