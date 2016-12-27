declare namespace UnityEditor.LookDevEnvironmentWindow {
  class EnvSettingsWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView, infos: UnityEditor.CubemapInfo);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    static readonly styles: UnityEditor.LookDevEnvironmentWindow.EnvSettingsWindow.Styles;
    // fields
  }
}
