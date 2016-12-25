declare namespace UnityEditor.Rendering {
  class TierSettings {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    standardShaderQuality: UnityEditor.Rendering.ShaderQuality;
    cascadedShadowMaps: boolean;
    reflectionProbeBoxProjection: boolean;
    reflectionProbeBlending: boolean;
    renderingPath: any;
  }
}
