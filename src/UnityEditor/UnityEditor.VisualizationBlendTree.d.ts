declare namespace UnityEditor {
  class VisualizationBlendTree {
    // constructors
    constructor();
    // methods
    Init(blendTree: UnityEditor.Animations.BlendTree, animator: any): void;
    Reset(): void;
    Destroy(): void;
    Update(): void;
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
