declare namespace UnityEditor {
  class AssetImporter {
    // constructors
    constructor();
    // methods
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): void;
    static GetAtPath(path: string): UnityEditor.AssetImporter;
    SaveAndReimport(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
