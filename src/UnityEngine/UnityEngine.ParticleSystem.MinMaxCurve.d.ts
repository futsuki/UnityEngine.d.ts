declare namespace UnityEngine.ParticleSystem {
  class MinMaxCurve {
    // constructors
    private constructor();
    // methods
    Evaluate(time: number): number;
    Evaluate(time: number, lerpFactor: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    mode: UnityEngine.ParticleSystemCurveMode;
    curveScalar: number;
    curveMultiplier: number;
    curveMax: UnityEngine.AnimationCurve;
    curveMin: UnityEngine.AnimationCurve;
    constantMax: number;
    constantMin: number;
    constant: number;
    curve: UnityEngine.AnimationCurve;
    // fields
  }
}
