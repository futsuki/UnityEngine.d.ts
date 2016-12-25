declare namespace UnityEditor {
  class PreviewBlendTree {
    // constructors
    constructor();
    // methods
    Init(blendTree: UnityEditor.Animations.BlendTree, animator: any): any;
    CreateParameters(): any;
    ResetStateMachine(): any;
    OnDisable(): any;
    OnDestroy(): any;
    TestForReset(): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly PreviewAnimator: any;
    // fields
  }
}
