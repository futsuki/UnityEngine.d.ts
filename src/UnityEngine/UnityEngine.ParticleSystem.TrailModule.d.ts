declare namespace UnityEngine.ParticleSystem {
  class TrailModule {
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
    lifetime: UnityEngine.ParticleSystem.MinMaxCurve;
    lifetimeMultiplier: number;
    minVertexDistance: number;
    textureMode: UnityEngine.ParticleSystemTrailTextureMode;
    worldSpace: boolean;
    dieWithParticles: boolean;
    sizeAffectsWidth: boolean;
    sizeAffectsLifetime: boolean;
    inheritParticleColor: boolean;
    colorOverLifetime: UnityEngine.ParticleSystem.MinMaxGradient;
    widthOverTrail: UnityEngine.ParticleSystem.MinMaxCurve;
    widthOverTrailMultiplier: number;
    colorOverTrail: UnityEngine.ParticleSystem.MinMaxGradient;
    // fields
  }
}
