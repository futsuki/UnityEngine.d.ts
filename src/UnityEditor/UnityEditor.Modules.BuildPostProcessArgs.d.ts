declare namespace UnityEditor.Modules {
  class BuildPostProcessArgs extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
