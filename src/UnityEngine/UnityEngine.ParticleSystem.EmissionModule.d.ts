declare namespace UnityEngine.ParticleSystem {
  class EmissionModule {
    // constructors
    private constructor();
    // methods
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): any;
    SetBursts(bursts: UnityEngine.ParticleSystem.Burst[], size: number): any;
    GetBursts(bursts: UnityEngine.ParticleSystem.Burst[]): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
