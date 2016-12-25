declare namespace UnityEditorInternal {
  class AssetStoreToolUtils {
    // constructors
    constructor();
    // methods
    static BuildAssetStoreAssetBundle(targetObject: any, targetPath: string): boolean;
    static PreviewAssetStoreAssetBundleInInspector(bundle: any, info: UnityEditor.AssetStoreAsset): boolean;
    static UpdatePreloadingInternal(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
