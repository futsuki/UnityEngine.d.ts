declare namespace UnityEditor {
  class LookDevViewsWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    static readonly styles: UnityEditor.LookDevViewsWindow.Styles;
    // fields
  }
}
