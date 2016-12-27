declare namespace UnityEditor {
  class AssetStoreAssetInspector extends UnityEditor.Editor {
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
    // properties
    static readonly Instance: UnityEditor.AssetStoreAssetInspector;
    static OfflineNoticeEnabled: boolean;
    // fields
  }
}
