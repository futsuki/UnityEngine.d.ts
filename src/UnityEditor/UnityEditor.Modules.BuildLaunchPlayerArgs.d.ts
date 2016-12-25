declare namespace UnityEditor.Modules {
  class BuildLaunchPlayerArgs {
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
    playerPackage: string;
    installPath: string;
    productName: string;
    options: UnityEditor.BuildOptions;
  }
}
