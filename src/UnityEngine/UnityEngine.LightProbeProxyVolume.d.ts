declare namespace UnityEngine {
  class LightProbeProxyVolume extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    Update(): void;
    // properties
    readonly boundsGlobal: UnityEngine.Bounds;
    sizeCustom: UnityEngine.Vector3;
    originCustom: UnityEngine.Vector3;
    boundingBoxMode: UnityEngine.LightProbeProxyVolume.BoundingBoxMode;
    resolutionMode: UnityEngine.LightProbeProxyVolume.ResolutionMode;
    probePositionMode: UnityEngine.LightProbeProxyVolume.ProbePositionMode;
    refreshMode: UnityEngine.LightProbeProxyVolume.RefreshMode;
    probeDensity: number;
    gridResolutionX: number;
    gridResolutionY: number;
    gridResolutionZ: number;
    static readonly isFeatureSupported: boolean;
    // fields
  }
}
