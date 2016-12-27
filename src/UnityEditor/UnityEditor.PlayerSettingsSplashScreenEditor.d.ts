declare namespace UnityEditor {
  class PlayerSettingsSplashScreenEditor extends System.Object {
    // constructors
    constructor(owner: UnityEditor.PlayerSettingsEditor);
    // methods
    OnEnable(): void;
    SplashSectionGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    // properties
    static readonly licenseAllowsDisabling: boolean;
    // fields
  }
}
