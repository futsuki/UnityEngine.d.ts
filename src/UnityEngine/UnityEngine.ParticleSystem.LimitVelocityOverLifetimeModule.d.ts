declare namespace UnityEngine.ParticleSystem {
  class LimitVelocityOverLifetimeModule {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    limitX: UnityEngine.ParticleSystem.MinMaxCurve;
    limitXMultiplier: number;
    limitY: UnityEngine.ParticleSystem.MinMaxCurve;
    limitYMultiplier: number;
    limitZ: UnityEngine.ParticleSystem.MinMaxCurve;
    limitZMultiplier: number;
    limit: UnityEngine.ParticleSystem.MinMaxCurve;
    limitMultiplier: number;
    dampen: number;
    separateAxes: boolean;
    space: UnityEngine.ParticleSystemSimulationSpace;
    // fields
  }
}
