declare namespace UnityEditor {
  class PlayerSettingsEditor {
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
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
    Initialize(targets: any[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    SetDirty(): void;
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
