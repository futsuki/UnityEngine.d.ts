declare namespace UnityEditor {
  class AnimEditor {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): any;
    OnAnimEditorGUI(parent: UnityEditor.EditorWindow, position: any): any;
    Update(): any;
    OnEnable(): any;
    OnDisable(): any;
    OnDestroy(): any;
    OnSelectionChanged(): any;
    OnStartLiveEdit(): any;
    OnEndLiveEdit(): any;
    OnLostFocus(): any;
    Repaint(): any;
    SetDirty(): any;
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
