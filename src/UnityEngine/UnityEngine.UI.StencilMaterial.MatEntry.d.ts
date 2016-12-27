declare namespace UnityEngine.UI.StencilMaterial {
  class MatEntry extends System.Object {
    // constructors
    constructor();
    // methods
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
