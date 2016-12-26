declare namespace UnityEditor {
  class PlayerSettingsSplashScreenEditor {
    // constructors
    constructor(owner: UnityEditor.PlayerSettingsEditor);
    // methods
    OnEnable(): void;
    SplashSectionGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly licenseAllowsDisabling: boolean;
    // fields
  }
}
