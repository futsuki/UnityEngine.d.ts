declare namespace UnityEngine.Rendering {
  class ColorWriteMask {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Alpha: UnityEngine.Rendering.ColorWriteMask;
    static Blue: UnityEngine.Rendering.ColorWriteMask;
    static Green: UnityEngine.Rendering.ColorWriteMask;
    static Red: UnityEngine.Rendering.ColorWriteMask;
    static All: UnityEngine.Rendering.ColorWriteMask;
  }
}
