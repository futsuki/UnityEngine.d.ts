declare namespace UnityEditorInternal {
  class EditMode {
    // constructors
    constructor();
    // methods
    static IsOwner(editor: UnityEditor.Editor): boolean;
    static ResetToolToPrevious(): void;
    static OnSelectionChange(): void;
    static QuitEditMode(): void;
    static DoEditModeInspectorModeButton(mode: UnityEditorInternal.EditMode.SceneViewEditMode, label: string, icon: any, bounds: any, caller: UnityEditor.Editor): void;
    static DoInspectorToolbar(modes: UnityEditorInternal.EditMode.SceneViewEditMode[], guiContents: any[], bounds: any, caller: UnityEditor.Editor): void;
    static ChangeEditMode(mode: UnityEditorInternal.EditMode.SceneViewEditMode, bounds: any, caller: UnityEditor.Editor): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly editMode: UnityEditorInternal.EditMode.SceneViewEditMode;
    // fields
    static onEditModeEndDelegate: ((UnityEditor.Editor) => void);
    static onEditModeStartDelegate: ((UnityEditor.Editor, UnityEditorInternal.EditMode.SceneViewEditMode) => void);
  }
}
