declare namespace UnityEditor {
  class AssetsItem {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    guid: string;
    pathName: string;
    message: string;
    exportedAssetPath: string;
    guidFolder: string;
    enabled: number;
    assetIsDir: number;
    changeFlags: number;
    previewPath: string;
    exists: number;
  }
}
