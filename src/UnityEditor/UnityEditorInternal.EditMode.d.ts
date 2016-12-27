declare namespace UnityEditorInternal {
  class EditMode extends System.Object {
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
    // properties
    static readonly editMode: UnityEditorInternal.EditMode.SceneViewEditMode;
    // fields
    static onEditModeEndDelegate: ((editor: UnityEditor.Editor) => void);
    static onEditModeStartDelegate: ((editor: UnityEditor.Editor, mode: UnityEditorInternal.EditMode.SceneViewEditMode) => void);
  }
}
