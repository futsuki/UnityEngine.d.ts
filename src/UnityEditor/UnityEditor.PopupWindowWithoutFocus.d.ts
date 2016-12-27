declare namespace UnityEditor {
  class PopupWindowWithoutFocus extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Show(activatorRect: any, windowContent: UnityEditor.PopupWindowContent): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    static IsVisible(): boolean;
    static Hide(): void;
    // properties
    // fields
  }
}
