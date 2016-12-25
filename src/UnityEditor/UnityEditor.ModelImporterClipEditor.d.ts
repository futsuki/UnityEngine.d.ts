declare namespace UnityEditor {
  class ModelImporterClipEditor {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDestroy(): any;
    OnInspectorGUI(): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnDisable(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
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
    selectedClipIndex: number;
    motionNodeIndex: number;
    pivotNodeIndex: number;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    m_SelectedClipIndexDoNotUseDirectly: number;
  }
}
