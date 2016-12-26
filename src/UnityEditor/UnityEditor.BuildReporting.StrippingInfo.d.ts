declare namespace UnityEditor.BuildReporting {
  class StrippingInfo {
    // constructors
    constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    RegisterDependency(obj: string, depends: string): void;
    AddModule(module: string): void;
    SetIcon(dependency: string, icon: string): void;
    AddModuleSize(module: string, size: number): void;
    static GetBuildReportData(report: UnityEditor.BuildReporting.BuildReport): UnityEditor.BuildReporting.StrippingInfo;
    static ModuleName(module: string): string;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    static RequiredByScripts: string;
    serializedDependencies: any;
    modules: any;
    serializedSizes: any;
    dependencies: any;
    sizes: any;
    icons: any;
    totalSize: number;
  }
}
