declare namespace UnityEditor.LookDevEnvironmentWindow {
  class EnvSettingsWindow {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView, infos: UnityEditor.CubemapInfo);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly styles: UnityEditor.LookDevEnvironmentWindow.EnvSettingsWindow.Styles;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
