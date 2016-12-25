declare namespace UnityEngine {
  class Color32 {
    // constructors
    private constructor();
    // methods
    static Lerp(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number): UnityEngine.Color32;
    static LerpUnclamped(a: UnityEngine.Color32, b: UnityEngine.Color32, t: number): UnityEngine.Color32;
    ToString(): string;
    ToString(format: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    r: number;
    g: number;
    b: number;
    a: number;
  }
}
