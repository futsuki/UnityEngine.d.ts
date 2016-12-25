declare namespace UnityEngine.ParticleSystem {
  class MinMaxGradient {
    // constructors
    private constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    Evaluate(time: number, lerpFactor: number): UnityEngine.Color;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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