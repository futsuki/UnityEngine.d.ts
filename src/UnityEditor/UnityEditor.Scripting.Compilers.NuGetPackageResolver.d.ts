declare namespace UnityEditor.Scripting.Compilers {
  class NuGetPackageResolver extends System.Object {
    // constructors
    constructor();
    // methods
    Resolve(): string[];
    // properties
    PackagesDirectory: string;
    ProjectLockFile: string;
    TargetMoniker: string;
    readonly ResolvedReferences: string[];
    // fields
  }
}
