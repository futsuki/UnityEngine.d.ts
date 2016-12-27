declare namespace UnityEditor {
  class InspectorWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static GetAllInspectorWindows(): UnityEditor.InspectorWindow[];
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    GetTracker(): UnityEditor.ActiveEditorTracker;
    GetLastInteractedEditor(): UnityEditor.Editor;
    GetEditorThatControlsPreview(editors: UnityEditor.IPreviewable[]): UnityEditor.IPreviewable;
    GetEditorsWithPreviews(editors: UnityEditor.Editor[]): UnityEditor.IPreviewable[];
    GetInspectedObject(): UnityEngine.Object;
    // properties
    isLocked: boolean;
    // fields
    m_ScrollPosition: any;
    m_InspectorMode: UnityEditor.InspectorMode;
    static s_CurrentInspectorWindow: UnityEditor.InspectorWindow;
  }
}
