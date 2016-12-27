declare namespace UnityEditor {
  class StyleDrawInspectView extends UnityEditor.BaseInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    UpdateInstructions(): void;
    GetSelectedStyleProperty(serializedObject: any, styleProperty: any): void;
    Unselect(): void;
    ShowOverlay(): void;
    // properties
    // fields
  }
}
