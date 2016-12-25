declare namespace UnityEditor {
  class AudioImporterInspector {
    // constructors
    constructor();
    // methods
    CurrentPlatformHasAutoTranslatedCompression(): boolean;
    IsHardwareSound(format: any): boolean;
    CurrentSelectionContainsHardwareSounds(): boolean;
    OnEnable(): any;
    OnInspectorGUI(): any;
    OnDisable(): any;
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
    UseDefaultMargins(): boolean;
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
    m_ForceToMono: UnityEditor.SerializedProperty;
    m_Normalize: UnityEditor.SerializedProperty;
    m_PreloadAudioData: UnityEditor.SerializedProperty;
    m_LoadInBackground: UnityEditor.SerializedProperty;
    m_OrigSize: UnityEditor.SerializedProperty;
    m_CompSize: UnityEditor.SerializedProperty;
  }
}
