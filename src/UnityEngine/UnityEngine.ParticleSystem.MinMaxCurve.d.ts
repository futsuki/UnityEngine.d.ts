declare namespace UnityEngine.ParticleSystem {
  class MinMaxCurve extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Evaluate(time: number): number;
    Evaluate(time: number, lerpFactor: number): number;
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
