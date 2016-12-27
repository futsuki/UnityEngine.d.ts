declare namespace UnityEditor {
  class PopupWindow extends UnityEditor.EditorWindow {
    // constructors
    protected constructor();
    // methods
    static Show(activatorRect: any, windowContent: UnityEditor.PopupWindowContent): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    // properties
    // fields
  }
}
