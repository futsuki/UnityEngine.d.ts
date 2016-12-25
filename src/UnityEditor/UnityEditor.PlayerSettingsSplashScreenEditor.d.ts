declare namespace UnityEditor {
  class PlayerSettingsSplashScreenEditor {
    // constructors
    constructor(owner: UnityEditor.PlayerSettingsEditor);
    // methods
    OnEnable(): any;
    SplashSectionGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly licenseAllowsDisabling: boolean;
    // fields
  }
}
