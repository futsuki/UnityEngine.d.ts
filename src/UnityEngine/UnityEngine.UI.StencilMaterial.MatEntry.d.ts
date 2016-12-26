declare namespace UnityEngine.UI.StencilMaterial {
  class MatEntry {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    baseMat: UnityEngine.Material;
    customMat: UnityEngine.Material;
    count: number;
    stencilId: number;
    operation: UnityEngine.Rendering.StencilOp;
    compareFunction: UnityEngine.Rendering.CompareFunction;
    readMask: number;
    writeMask: number;
    useAlphaClip: boolean;
    colorMask: UnityEngine.Rendering.ColorWriteMask;
  }
}
