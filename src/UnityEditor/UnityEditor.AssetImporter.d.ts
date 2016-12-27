declare namespace UnityEditor {
  class AssetImporter extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): void;
    static GetAtPath(path: string): UnityEditor.AssetImporter;
    SaveAndReimport(): void;
    // properties
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    // fields
  }
}
