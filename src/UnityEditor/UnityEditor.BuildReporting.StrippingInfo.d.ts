declare namespace UnityEditor.BuildReporting {
  class StrippingInfo extends UnityEngine.ScriptableObject {
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
    // properties
    // fields
    static RequiredByScripts: string;
    serializedDependencies: UnityEditor.BuildReporting.StrippingInfo.SerializedDependency[];
    modules: string[];
    serializedSizes: number[];
    dependencies: any;
    sizes: any;
    icons: any;
    totalSize: number;
  }
}
