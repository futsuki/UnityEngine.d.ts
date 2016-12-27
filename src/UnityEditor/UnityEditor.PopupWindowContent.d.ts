declare namespace UnityEditor {
  class PopupWindowContent extends System.Object {
    // constructors
    protected constructor();
    // methods
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    OnOpen(): void;
    OnClose(): void;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
