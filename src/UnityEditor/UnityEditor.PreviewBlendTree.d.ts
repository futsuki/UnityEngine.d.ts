declare namespace UnityEditor {
  class PreviewBlendTree {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly PreviewAnimator: any;
    // fields
  }
}
