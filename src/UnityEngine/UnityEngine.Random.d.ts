declare namespace UnityEngine {
  class Random {
    // constructors
    constructor();
    // methods
    static InitState(seed: number): any;
    static Range(min: number, max: number): number;
    static Range(min: number, max: number): number;
    static RandomRange(min: number, max: number): number;
    static RandomRange(min: number, max: number): number;
    static ColorHSV(): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number): UnityEngine.Color;
    static ColorHSV(hueMin: number, hueMax: number, saturationMin: number, saturationMax: number, valueMin: number, valueMax: number, alphaMin: number, alphaMax: number): UnityEngine.Color;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static seed: number;
    static state: UnityEngine.Random.State;
    static readonly value: number;
    static readonly insideUnitSphere: UnityEngine.Vector3;
    static readonly insideUnitCircle: UnityEngine.Vector2;
    static readonly onUnitSphere: UnityEngine.Vector3;
    static readonly rotation: UnityEngine.Quaternion;
    static readonly rotationUniform: UnityEngine.Quaternion;
    // fields
  }
}
