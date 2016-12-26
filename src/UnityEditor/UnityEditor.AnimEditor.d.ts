declare namespace UnityEditor {
  class AnimEditor {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): any;
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
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    locked: boolean;
    readonly stateDisabled: boolean;
    readonly state: UnityEditorInternal.AnimationWindowState;
    readonly selection: UnityEditorInternal.AnimationWindowSelection;
    selectedItem: UnityEditorInternal.AnimationWindowSelectionItem;
    policy: UnityEditorInternal.AnimationWindowPolicy;
    name: string;
    hideFlags: any;
    // fields
  }
}
