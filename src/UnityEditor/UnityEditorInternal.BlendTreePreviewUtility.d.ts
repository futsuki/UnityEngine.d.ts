declare namespace UnityEditorInternal {
  class BlendTreePreviewUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetRootBlendTreeChildWeights(animator: any, layerIndex: number, stateHash: number, weightArray: number[]): void;
    static CalculateRootBlendTreeChildWeights(animator: any, layerIndex: number, stateHash: number, weightArray: number[], blendX: number, blendY: number): void;
    static CalculateBlendTexture(animator: any, layerIndex: number, stateHash: number, blendTexture: any, weightTextures: any[], rect: any): void;
    // properties
    // fields
  }
}
