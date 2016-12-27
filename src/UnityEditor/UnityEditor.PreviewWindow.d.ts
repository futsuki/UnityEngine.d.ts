declare namespace UnityEditor {
  class PreviewWindow extends UnityEditor.InspectorWindow {
    // constructors
    constructor();
    // methods
    SetParentInspector(inspector: UnityEditor.InspectorWindow): void;
    GetLastInteractedEditor(): UnityEditor.Editor;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    // properties
    // fields
  }
}
