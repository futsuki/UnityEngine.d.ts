declare namespace UnityEngine.SceneManagement {
  class SceneUtility {
    // constructors
    private constructor();
    // methods
    static GetScenePathByBuildIndex(buildIndex: number): string;
    static GetBuildIndexByScenePath(scenePath: string): number;
    // properties
    // fields
  }
}
