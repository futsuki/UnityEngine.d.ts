declare namespace UnityEditor.BuildPlayerWindow {
  class BuildPlatforms extends System.Object {
    // constructors
    protected constructor();
    // methods
    GetBuildTargetDisplayName(target: UnityEditor.BuildTarget): string;
    BuildPlatformIndexFromTargetGroup(group: UnityEditor.BuildTargetGroup): number;
    BuildPlatformFromTargetGroup(group: UnityEditor.BuildTargetGroup): UnityEditor.BuildPlayerWindow.BuildPlatform;
    // properties
    // fields
    buildPlatforms: UnityEditor.BuildPlayerWindow.BuildPlatform[];
  }
}
