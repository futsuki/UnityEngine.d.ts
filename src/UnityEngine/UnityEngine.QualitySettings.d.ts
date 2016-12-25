declare namespace UnityEngine {
  class QualitySettings {
    // constructors
    constructor();
    // methods
    static GetQualityLevel(): number;
    static SetQualityLevel(index: number, applyExpensiveChanges: boolean): any;
    static SetQualityLevel(index: number): any;
    static IncreaseLevel(applyExpensiveChanges: boolean): any;
    static IncreaseLevel(): any;
    static DecreaseLevel(applyExpensiveChanges: boolean): any;
    static DecreaseLevel(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
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
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
