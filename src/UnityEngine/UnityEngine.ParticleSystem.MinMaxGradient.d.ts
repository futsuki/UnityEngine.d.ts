declare namespace UnityEngine.ParticleSystem {
  class MinMaxGradient extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    Evaluate(time: number, lerpFactor: number): UnityEngine.Color;
    // properties
    mode: UnityEngine.ParticleSystemGradientMode;
    gradientMax: UnityEngine.Gradient;
    gradientMin: UnityEngine.Gradient;
    colorMax: UnityEngine.Color;
    colorMin: UnityEngine.Color;
    color: UnityEngine.Color;
    gradient: UnityEngine.Gradient;
    // fields
  }
}
