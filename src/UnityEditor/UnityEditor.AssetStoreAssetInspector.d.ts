declare namespace UnityEditor {
  class AssetStoreAssetInspector {
    // constructors
    constructor();
    // methods
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): any;
    Update(): any;
    OnInspectorGUI(): any;
    static OpenItemInAssetStore(activeAsset: UnityEditor.AssetStoreAsset): any;
    HasPreviewGUI(): boolean;
    OnEnable(): any;
    OnDisable(): any;
    OnPreviewSettings(): any;
    GetInfoString(): string;
    OnPreviewGUI(r: any, background: any): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    GetPreviewTitle(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
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
    static readonly Instance: UnityEditor.AssetStoreAssetInspector;
    static OfflineNoticeEnabled: boolean;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
