declare namespace UnityEditor.BuildPlayerWindow {
  class BuildPlatforms {
    // constructors
    private constructor();
    // methods
    GetBuildTargetDisplayName(target: UnityEditor.BuildTarget): string;
    BuildPlatformIndexFromTargetGroup(group: UnityEditor.BuildTargetGroup): number;
    BuildPlatformFromTargetGroup(group: UnityEditor.BuildTargetGroup): UnityEditor.BuildPlayerWindow.BuildPlatform;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    buildPlatforms: UnityEditor.BuildPlayerWindow.BuildPlatform[];
  }
}
