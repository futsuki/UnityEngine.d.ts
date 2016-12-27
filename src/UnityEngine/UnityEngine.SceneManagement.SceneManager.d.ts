declare namespace UnityEngine.SceneManagement {
  class SceneManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetActiveScene(): UnityEngine.SceneManagement.Scene;
    static SetActiveScene(scene: UnityEngine.SceneManagement.Scene): boolean;
    static GetSceneByPath(scenePath: string): UnityEngine.SceneManagement.Scene;
    static GetSceneByName(name: string): UnityEngine.SceneManagement.Scene;
    static GetSceneByBuildIndex(buildIndex: number): UnityEngine.SceneManagement.Scene;
    static GetSceneAt(index: number): UnityEngine.SceneManagement.Scene;
    static GetAllScenes(): UnityEngine.SceneManagement.Scene[];
    static LoadScene(sceneName: string): void;
    static LoadScene(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode): void;
    static LoadScene(sceneBuildIndex: number): void;
    static LoadScene(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode): void;
    static LoadSceneAsync(sceneName: string): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneBuildIndex: number): UnityEngine.AsyncOperation;
    static LoadSceneAsync(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode): UnityEngine.AsyncOperation;
    static CreateScene(sceneName: string): UnityEngine.SceneManagement.Scene;
    static UnloadScene(scene: UnityEngine.SceneManagement.Scene): boolean;
    static UnloadScene(sceneBuildIndex: number): boolean;
    static UnloadScene(sceneName: string): boolean;
    static UnloadSceneAsync(sceneBuildIndex: number): UnityEngine.AsyncOperation;
    static UnloadSceneAsync(sceneName: string): UnityEngine.AsyncOperation;
    static UnloadSceneAsync(scene: UnityEngine.SceneManagement.Scene): UnityEngine.AsyncOperation;
    static MergeScenes(sourceScene: UnityEngine.SceneManagement.Scene, destinationScene: UnityEngine.SceneManagement.Scene): void;
    static MoveGameObjectToScene(go: UnityEngine.GameObject, scene: UnityEngine.SceneManagement.Scene): void;
    // properties
    static readonly sceneCount: number;
    static readonly sceneCountInBuildSettings: number;
    // fields
  }
}
