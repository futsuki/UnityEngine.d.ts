declare namespace UnityEngine.SceneManagement {
  class SceneUtility {
    // constructors
    private constructor();
    // methods
    static GetScenePathByBuildIndex(buildIndex: number): string;
    static GetBuildIndexByScenePath(scenePath: string): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
