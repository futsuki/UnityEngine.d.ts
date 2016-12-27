declare namespace UnityEditor {
  class PreviewBlendTree extends System.Object {
    // constructors
    constructor();
    // methods
    Init(blendTree: UnityEditor.Animations.BlendTree, animator: any): void;
    CreateParameters(): void;
    ResetStateMachine(): void;
    OnDisable(): void;
    OnDestroy(): void;
    TestForReset(): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    // properties
    readonly PreviewAnimator: any;
    // fields
  }
}
