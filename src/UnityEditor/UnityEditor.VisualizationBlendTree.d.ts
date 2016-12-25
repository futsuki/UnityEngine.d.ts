declare namespace UnityEditor {
  class VisualizationBlendTree {
    // constructors
    constructor();
    // methods
    Init(blendTree: UnityEditor.Animations.BlendTree, animator: any): any;
    Reset(): any;
    Destroy(): any;
    Update(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly animator: any;
    readonly controllerDirty: boolean;
    // fields
  }
}
