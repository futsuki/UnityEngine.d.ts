declare namespace UnityEditor {
  class AssetStoreAssetInspector {
    // constructors
    constructor();
    // methods
    OnDownloadProgress(id: string, message: string, bytes: number, total: number): void;
    Update(): void;
    OnInspectorGUI(): void;
    static OpenItemInAssetStore(activeAsset: UnityEditor.AssetStoreAsset): void;
    HasPreviewGUI(): boolean;
    OnEnable(): void;
    OnDisable(): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    GetPreviewTitle(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
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
