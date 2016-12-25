declare namespace UnityEditor.Scripting.Compilers {
  class NuGetPackageResolver {
    // constructors
    constructor();
    // methods
    Resolve(): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    PackagesDirectory: string;
    ProjectLockFile: string;
    TargetMoniker: string;
    readonly ResolvedReferences: string[];
    // fields
  }
}
