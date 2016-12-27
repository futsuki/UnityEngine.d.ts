declare namespace UnityEditor {
  class ObjectPreviewPopup extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(previewObject: UnityEngine.Object);
    // methods
    OnClose(): void;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    // properties
    // fields
  }
}
