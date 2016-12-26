declare namespace UnityEditor {
  class AudioImporterInspector {
    // constructors
    constructor();
    // methods
    CurrentPlatformHasAutoTranslatedCompression(): boolean;
    IsHardwareSound(format: any): boolean;
    CurrentSelectionContainsHardwareSounds(): boolean;
    OnEnable(): void;
    OnInspectorGUI(): void;
    OnDisable(): void;
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
    UseDefaultMargins(): boolean;
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
    m_ForceToMono: UnityEditor.SerializedProperty;
    m_Normalize: UnityEditor.SerializedProperty;
    m_PreloadAudioData: UnityEditor.SerializedProperty;
    m_LoadInBackground: UnityEditor.SerializedProperty;
    m_OrigSize: UnityEditor.SerializedProperty;
    m_CompSize: UnityEditor.SerializedProperty;
  }
}
