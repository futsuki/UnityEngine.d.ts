declare namespace UnityEditor {
  class AnimEditor extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): UnityEditor.AnimEditor[];
    OnAnimEditorGUI(parent: UnityEditor.EditorWindow, position: any): void;
    Update(): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    OnSelectionChanged(): void;
    OnStartLiveEdit(): void;
    OnEndLiveEdit(): void;
    OnLostFocus(): void;
    Repaint(): void;
    // properties
    locked: boolean;
    readonly stateDisabled: boolean;
    readonly state: UnityEditorInternal.AnimationWindowState;
    readonly selection: UnityEditorInternal.AnimationWindowSelection;
    selectedItem: UnityEditorInternal.AnimationWindowSelectionItem;
    policy: UnityEditorInternal.AnimationWindowPolicy;
    // fields
  }
}
