declare namespace UnityEditor {
  class LayoutDropdownWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(so: UnityEditor.SerializedObject);
    // methods
    OnOpen(): void;
    OnClose(): void;
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    // fields
  }
}
