declare namespace UnityEditor {
  class ImportPackageItem {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    exportedAssetPath: string;
    destinationAssetPath: string;
    sourceFolder: string;
    previewPath: string;
    guid: string;
    enabledStatus: number;
    isFolder: boolean;
    exists: boolean;
    assetChanged: boolean;
    pathConflict: boolean;
    projectAsset: boolean;
  }
}
