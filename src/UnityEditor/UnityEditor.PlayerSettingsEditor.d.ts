declare namespace UnityEditor {
  class PlayerSettingsEditor {
    // constructors
    constructor();
    // methods
    FindPropertyAssert(name: string): UnityEditor.SerializedProperty;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): any;
    BeginSettingsBox(nr: number, header: any): boolean;
    EndSettingsBox(): any;
    ShowSharedNote(): any;
    ResolutionSectionGUI(targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): any;
    DebugAndCrashReportingGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): any;
    static BuildDisabledEnumPopup(selected: any, uiString: any): any;
    OtherSectionGUI(platform: UnityEditor.BuildPlayerWindow.BuildPlatform, targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): any;
    BrowseablePathProperty(propertyLabel: string, property: UnityEditor.SerializedProperty, browsePanelTitle: string, extension: string, dir: string): any;
    PublishSectionGUI(targetGroup: UnityEditor.BuildTargetGroup, settingsExtension: UnityEditor.Modules.ISettingEditorExtension): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnPreviewSettings(): any;
    GetInfoString(): string;
    ReloadPreviewInstances(): any;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    static defaultIsFullScreen: any;
    m_VRSettings: UnityEditorInternal.VR.PlayerSettingsEditorVR;
  }
}
