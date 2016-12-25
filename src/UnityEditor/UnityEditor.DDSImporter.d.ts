declare namespace UnityEditor {
  class DDSImporter {
    // constructors
    constructor();
    // methods
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    isReadable: boolean;
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
