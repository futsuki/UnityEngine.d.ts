declare namespace UnityEditor {
  class VisualizationBlendTree extends System.Object {
    // constructors
    constructor();
    // methods
    Init(blendTree: UnityEditor.Animations.BlendTree, animator: any): void;
    Reset(): void;
    Destroy(): void;
    Update(): void;
    // properties
    readonly animator: any;
    readonly controllerDirty: boolean;
    // fields
  }
}
