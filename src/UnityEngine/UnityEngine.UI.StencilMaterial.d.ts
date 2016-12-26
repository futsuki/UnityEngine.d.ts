declare namespace UnityEngine.UI {
  class StencilMaterial {
    // constructors
    private constructor();
    // methods
    static Add(baseMat: UnityEngine.Material, stencilID: number): UnityEngine.Material;
    static Add(baseMat: UnityEngine.Material, stencilID: number, operation: UnityEngine.Rendering.StencilOp, compareFunction: UnityEngine.Rendering.CompareFunction, colorWriteMask: UnityEngine.Rendering.ColorWriteMask): UnityEngine.Material;
    static Add(baseMat: UnityEngine.Material, stencilID: number, operation: UnityEngine.Rendering.StencilOp, compareFunction: UnityEngine.Rendering.CompareFunction, colorWriteMask: UnityEngine.Rendering.ColorWriteMask, readMask: number, writeMask: number): UnityEngine.Material;
    static Remove(customMat: UnityEngine.Material): void;
    static ClearAll(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
