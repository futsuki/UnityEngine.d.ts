declare namespace UnityEditor {
  class PackageInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    packagePath: string;
    jsonInfo: string;
    iconURL: string;
  }
}
