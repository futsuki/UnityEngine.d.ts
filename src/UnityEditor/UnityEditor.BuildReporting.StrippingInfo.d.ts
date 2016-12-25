declare namespace UnityEditor.BuildReporting {
  class StrippingInfo {
    // constructors
    constructor();
    // methods
    OnBeforeSerialize(): any;
    OnAfterDeserialize(): any;
    RegisterDependency(obj: string, depends: string): any;
    AddModule(module: string): any;
    SetIcon(dependency: string, icon: string): any;
    AddModuleSize(module: string, size: number): any;
    static GetBuildReportData(report: UnityEditor.BuildReporting.BuildReport): UnityEditor.BuildReporting.StrippingInfo;
    static ModuleName(module: string): string;
    SetDirty(): any;
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
