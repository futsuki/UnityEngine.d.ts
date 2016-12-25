declare namespace UnityEngine {
  class Gradient {
    // constructors
    constructor();
    // methods
    Evaluate(time: number): UnityEngine.Color;
    SetKeys(colorKeys: UnityEngine.GradientColorKey[], alphaKeys: UnityEngine.GradientAlphaKey[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    colorKeys: UnityEngine.GradientColorKey[];
    alphaKeys: UnityEngine.GradientAlphaKey[];
    mode: UnityEngine.GradientMode;
    // fields
  }
}
