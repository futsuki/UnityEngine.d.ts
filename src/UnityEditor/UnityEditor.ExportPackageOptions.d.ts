declare namespace UnityEditor {
  class ExportPackageOptions {
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
    static Default: UnityEditor.ExportPackageOptions;
    static Interactive: UnityEditor.ExportPackageOptions;
    static Recurse: UnityEditor.ExportPackageOptions;
    static IncludeDependencies: UnityEditor.ExportPackageOptions;
    static IncludeLibraryAssets: UnityEditor.ExportPackageOptions;
  }
}
