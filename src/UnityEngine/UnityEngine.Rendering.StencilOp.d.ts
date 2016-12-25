declare namespace UnityEngine.Rendering {
  class StencilOp {
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
    static Keep: UnityEngine.Rendering.StencilOp;
    static Zero: UnityEngine.Rendering.StencilOp;
    static Replace: UnityEngine.Rendering.StencilOp;
    static IncrementSaturate: UnityEngine.Rendering.StencilOp;
    static DecrementSaturate: UnityEngine.Rendering.StencilOp;
    static Invert: UnityEngine.Rendering.StencilOp;
    static IncrementWrap: UnityEngine.Rendering.StencilOp;
    static DecrementWrap: UnityEngine.Rendering.StencilOp;
  }
}
