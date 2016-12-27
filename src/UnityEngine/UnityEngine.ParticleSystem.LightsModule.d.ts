declare namespace UnityEngine.ParticleSystem {
  class LightsModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    enabled: boolean;
    ratio: number;
    useRandomDistribution: boolean;
    light: UnityEngine.Light;
    useParticleColor: boolean;
    sizeAffectsRange: boolean;
    alphaAffectsIntensity: boolean;
    range: UnityEngine.ParticleSystem.MinMaxCurve;
    rangeMultiplier: number;
    intensity: UnityEngine.ParticleSystem.MinMaxCurve;
    intensityMultiplier: number;
    maxLights: number;
    // fields
  }
}
