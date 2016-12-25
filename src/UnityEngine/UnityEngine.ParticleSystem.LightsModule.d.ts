declare namespace UnityEngine.ParticleSystem {
  class LightsModule {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
