declare namespace UnityEditor.Modules {
  class BuildPostProcessArgs {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    target: UnityEditor.BuildTarget;
    stagingArea: string;
    stagingAreaData: string;
    stagingAreaDataManaged: string;
    playerPackage: string;
    installPath: string;
    companyName: string;
    productName: string;
    productGUID: any;
    options: UnityEditor.BuildOptions;
    report: UnityEditor.BuildReporting.BuildReport;
  }
}
