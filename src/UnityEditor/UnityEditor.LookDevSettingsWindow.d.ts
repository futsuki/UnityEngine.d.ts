declare namespace UnityEditor {
  class LookDevSettingsWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    static readonly styles: UnityEditor.LookDevSettingsWindow.Styles;
    // fields
  }
}
