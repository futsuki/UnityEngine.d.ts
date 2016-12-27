declare namespace UnityEditor {
  class TransitionPreview extends System.Object {
    // constructors
    constructor();
    // methods
    SetTransition(transition: UnityEditor.Animations.AnimatorStateTransition, sourceState: UnityEditor.Animations.AnimatorState, destinationState: UnityEditor.Animations.AnimatorState, srcLayer: UnityEditor.Animations.AnimatorControllerLayer, previewObject: any): void;
    DoTransitionPreview(): void;
    OnDisable(): void;
    OnDestroy(): void;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    // properties
    mustResample: boolean;
    // fields
  }
}
