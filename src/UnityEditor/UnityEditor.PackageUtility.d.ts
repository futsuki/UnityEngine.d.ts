declare namespace UnityEditor {
  class PackageUtility {
    // constructors
    constructor();
    // methods
    static BuildExportPackageItemsList(guids: string[], dependencies: boolean): UnityEditor.ExportPackageItem[];
    static ExportPackage(guids: string[], fileName: string): void;
    static ExtractAndPrepareAssetList(packagePath: string, packageIconPath: any, canPerformReInstall: any): UnityEditor.ImportPackageItem[];
    static ImportPackageAssets(packageName: string, items: UnityEditor.ImportPackageItem[], performReInstall: boolean): void;
    static ImportPackageAssetsImmediately(packageName: string, items: UnityEditor.ImportPackageItem[], performReInstall: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
