declare namespace UnityEditor {
  class ExportPackageItem {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    assetPath: string;
    guid: string;
    isFolder: boolean;
    enabledStatus: number;
  }
}
