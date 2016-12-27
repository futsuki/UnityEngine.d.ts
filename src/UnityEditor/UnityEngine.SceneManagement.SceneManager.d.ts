declare namespace UnityEngine.SceneManagement {
  class SceneManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetActiveScene(): any;
    static SetActiveScene(scene: any): boolean;
    static GetSceneByPath(scenePath: string): any;
    static GetSceneByName(name: string): any;
    static GetSceneByBuildIndex(buildIndex: number): any;
    static GetSceneAt(index: number): any;
    static GetAllScenes(): any[];
    static LoadScene(sceneName: string): void;
    static LoadScene(sceneName: string, mode: any): void;
    static LoadScene(sceneBuildIndex: number): void;
    static LoadScene(sceneBuildIndex: number, mode: any): void;
    static LoadSceneAsync(sceneName: string): any;
    static LoadSceneAsync(sceneName: string, mode: any): any;
    static LoadSceneAsync(sceneBuildIndex: number): any;
    static LoadSceneAsync(sceneBuildIndex: number, mode: any): any;
    static CreateScene(sceneName: string): any;
    static UnloadScene(scene: any): boolean;
    static UnloadScene(sceneBuildIndex: number): boolean;
    static UnloadScene(sceneName: string): boolean;
    static UnloadSceneAsync(sceneBuildIndex: number): any;
    static UnloadSceneAsync(sceneName: string): any;
    static UnloadSceneAsync(scene: any): any;
    static MergeScenes(sourceScene: any, destinationScene: any): void;
    static MoveGameObjectToScene(go: any, scene: any): void;
    // properties
    static readonly sceneCount: number;
    static readonly sceneCountInBuildSettings: number;
    // fields
  }
}
