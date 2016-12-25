declare namespace UnityEditor {
  class TransitionPreview {
    // constructors
    constructor();
    // methods
    SetTransition(transition: UnityEditor.Animations.AnimatorStateTransition, sourceState: UnityEditor.Animations.AnimatorState, destinationState: UnityEditor.Animations.AnimatorState, srcLayer: UnityEditor.Animations.AnimatorControllerLayer, previewObject: any): any;
    DoTransitionPreview(): any;
    OnDisable(): any;
    OnDestroy(): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    mustResample: boolean;
    // fields
  }
}
