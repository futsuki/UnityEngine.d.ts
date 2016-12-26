declare namespace UnityEngine {
  class Color {
    // constructors
    private constructor();
    // methods
    ToString(): string;
    ToString(format: string): string;
    GetHashCode(): number;
    Equals(other: any): boolean;
    static Lerp(a: UnityEngine.Color, b: UnityEngine.Color, t: number): UnityEngine.Color;
    static LerpUnclamped(a: UnityEngine.Color, b: UnityEngine.Color, t: number): UnityEngine.Color;
    static RGBToHSV(rgbColor: UnityEngine.Color, H: any, S: any, V: any): void;
    static HSVToRGB(H: number, S: number, V: number): UnityEngine.Color;
    static HSVToRGB(H: number, S: number, V: number, hdr: boolean): UnityEngine.Color;
    GetType(): any;
    // properties
    static readonly red: UnityEngine.Color;
    static readonly green: UnityEngine.Color;
    static readonly blue: UnityEngine.Color;
    static readonly white: UnityEngine.Color;
    static readonly black: UnityEngine.Color;
    static readonly yellow: UnityEngine.Color;
    static readonly cyan: UnityEngine.Color;
    static readonly magenta: UnityEngine.Color;
    static readonly gray: UnityEngine.Color;
    static readonly grey: UnityEngine.Color;
    static readonly clear: UnityEngine.Color;
    readonly grayscale: number;
    readonly linear: UnityEngine.Color;
    readonly gamma: UnityEngine.Color;
    readonly maxColorComponent: number;
    get_Item(index: number): number;
    set_Item(index: number, value: number): void;
    // fields
    r: number;
    g: number;
    b: number;
    a: number;
  }
}
