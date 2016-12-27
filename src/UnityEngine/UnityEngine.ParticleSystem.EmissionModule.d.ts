declare namespace UnityEngine.ParticleSystem {
  class EmissionModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): void;
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[], size: number): void;
    GetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): number;
    // properties
    enabled: boolean;
    rateOverTime: UnityEngine.ParticleSystem.MinMaxCurve;
    rateOverTimeMultiplier: number;
    rateOverDistance: UnityEngine.ParticleSystem.MinMaxCurve;
    rateOverDistanceMultiplier: number;
    readonly burstCount: number;
    type: UnityEngine.ParticleSystemEmissionType;
    rate: UnityEngine.ParticleSystem.MinMaxCurve;
    rateMultiplier: number;
    // fields
  }
}
