declare namespace UnityEngine {
  class Renderer extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock): void;
    GetPropertyBlock(dest: UnityEngine.MaterialPropertyBlock): void;
    GetClosestReflectionProbes(result: UnityEngine.Rendering.ReflectionProbeBlendInfo[]): void;
    // properties
    readonly isPartOfStaticBatch: boolean;
    readonly worldToLocalMatrix: UnityEngine.Matrix4x4;
    readonly localToWorldMatrix: UnityEngine.Matrix4x4;
    enabled: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    castShadows: boolean;
    receiveShadows: boolean;
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    materials: UnityEngine.Material[];
    sharedMaterials: UnityEngine.Material[];
    readonly bounds: UnityEngine.Bounds;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    readonly isVisible: boolean;
    useLightProbes: boolean;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    // fields
  }
}
