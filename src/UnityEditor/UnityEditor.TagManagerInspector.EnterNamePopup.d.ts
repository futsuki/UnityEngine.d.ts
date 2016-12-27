declare namespace UnityEditor.TagManagerInspector {
  class EnterNamePopup extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(tags: UnityEditor.SerializedProperty, cb: ((str: string) => void));
    // methods
    GetWindowSize(): any;
    OnGUI(windowRect: any): void;
    // properties
    // fields
  }
}
