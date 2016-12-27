declare namespace UnityEditor {
  class PlayerSettingsEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    FindPropertyAssert(name: string): UnityEditor.SerializedProperty;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): void;
    BeginSettingsBox(nr: number, header: any): boolean;
    EndSettingsBox(): void;
    ShowSharedNote(): void;
    ResolutionSectionGUI(targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    DebugAndCrashReportingGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    static BuildDisabledEnumPopup(selected: any, uiString: any): void;
    OtherSectionGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    BrowseablePathProperty(propertyLabel: string, property: UnityEditor.SerializedProperty, browsePanelTitle: string, extension: string, dir: string): void;
    PublishSectionGUI(targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): void;
    // properties
    // fields
    static defaultIsFullScreen: any;
    m_VRSettings: UnityEditorInternal.VR.PlayerSettingsEditorVR;
  }
}
