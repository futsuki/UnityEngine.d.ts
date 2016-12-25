declare namespace UnityEditor {
  class ImportAssetOptions {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Default: UnityEditor.ImportAssetOptions;
    static ForceUpdate: UnityEditor.ImportAssetOptions;
    static ForceSynchronousImport: UnityEditor.ImportAssetOptions;
    static ImportRecursive: UnityEditor.ImportAssetOptions;
    static DontDownloadFromCacheServer: UnityEditor.ImportAssetOptions;
    static ForceUncompressedImport: UnityEditor.ImportAssetOptions;
  }
}
