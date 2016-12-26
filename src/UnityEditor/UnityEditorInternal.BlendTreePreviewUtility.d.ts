declare namespace UnityEditorInternal {
  class BlendTreePreviewUtility {
    // constructors
    constructor();
    // methods
    static GetRootBlendTreeChildWeights(animator: any, layerIndex: number, stateHash: number, weightArray: number[]): void;
    static CalculateRootBlendTreeChildWeights(animator: any, layerIndex: number, stateHash: number, weightArray: number[], blendX: number, blendY: number): void;
    static CalculateBlendTexture(animator: any, layerIndex: number, stateHash: number, blendTexture: any, weightTextures: any[], rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
