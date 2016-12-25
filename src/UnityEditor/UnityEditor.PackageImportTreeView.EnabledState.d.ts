declare namespace UnityEditor.PackageImportTreeView {
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
    static NotSet: UnityEditor.PackageImportTreeView.EnabledState;
    static None: UnityEditor.PackageImportTreeView.EnabledState;
    static All: UnityEditor.PackageImportTreeView.EnabledState;
    static Mixed: UnityEditor.PackageImportTreeView.EnabledState;
  }
}
