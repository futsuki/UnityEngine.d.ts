declare namespace UnityEditorInternal {
  class EditMode {
    // constructors
    constructor();
    // methods
    static IsOwner(editor: UnityEditor.Editor): boolean;
    static ResetToolToPrevious(): any;
    static OnSelectionChange(): any;
    static QuitEditMode(): any;
    static DoEditModeInspectorModeButton(mode: UnityEditorInternal.EditMode.SceneViewEditMode, label: string, icon: any, bounds: any, caller: UnityEditor.Editor): any;
    static DoInspectorToolbar(modes: UnityEditorInternal.EditMode.SceneViewEditMode[], guiContents: any[], bounds: any, caller: UnityEditor.Editor): any;
    static ChangeEditMode(mode: UnityEditorInternal.EditMode.SceneViewEditMode, bounds: any, caller: UnityEditor.Editor): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly editMode: UnityEditorInternal.EditMode.SceneViewEditMode;
    // fields
    static onEditModeEndDelegate: UnityEditorInternal.EditMode.OnEditModeStopFunc;
    static onEditModeStartDelegate: UnityEditorInternal.EditMode.OnEditModeStartFunc;
  }
}
