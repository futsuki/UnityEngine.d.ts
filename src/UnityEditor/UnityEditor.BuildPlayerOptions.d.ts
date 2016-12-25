declare namespace UnityEditor {
  class BuildPlayerOptions {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    scenes: string[];
    locationPathName: string;
    assetBundleManifestPath: string;
    target: UnityEditor.BuildTarget;
    options: UnityEditor.BuildOptions;
    // fields
  }
}
