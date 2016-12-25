declare namespace UnityEditor.PackageExportTreeView {
  class EnabledState {
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
    static NotSet: UnityEditor.PackageExportTreeView.EnabledState;
    static None: UnityEditor.PackageExportTreeView.EnabledState;
    static All: UnityEditor.PackageExportTreeView.EnabledState;
    static Mixed: UnityEditor.PackageExportTreeView.EnabledState;
  }
}
