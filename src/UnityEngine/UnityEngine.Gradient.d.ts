declare namespace UnityEngine {
  class Gradient extends System.Object {
    // constructors
    constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    SetKeys(colorKeys: UnityEngine.GradientColorKey[], alphaKeys: UnityEngine.GradientAlphaKey[]): void;
    // properties
    colorKeys: UnityEngine.GradientColorKey[];
    alphaKeys: UnityEngine.GradientAlphaKey[];
    mode: UnityEngine.GradientMode;
    // fields
  }
}
