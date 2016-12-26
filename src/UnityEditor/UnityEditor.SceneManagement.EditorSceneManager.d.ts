declare namespace UnityEditor.SceneManagement {
  class EditorSceneManager {
    // constructors
    constructor();
    // methods
    static OpenScene(scenePath: string, mode: UnityEditor.SceneManagement.OpenSceneMode): any;
    static OpenScene(scenePath: string): any;
    static NewScene(setup: UnityEditor.SceneManagement.NewSceneSetup, mode: UnityEditor.SceneManagement.NewSceneMode): any;
    static NewScene(setup: UnityEditor.SceneManagement.NewSceneSetup): any;
    static CloseScene(scene: any, removeScene: boolean): boolean;
    static MoveSceneBefore(src: any, dst: any): void;
    static MoveSceneAfter(src: any, dst: any): void;
    static SaveScene(scene: any, dstScenePath: string, saveAsCopy: boolean): boolean;
    static SaveScene(scene: any, dstScenePath: string): boolean;
    static SaveScene(scene: any): boolean;
    static SaveOpenScenes(): boolean;
    static SaveScenes(scenes: any[]): boolean;
    static SaveCurrentModifiedScenesIfUserWantsTo(): boolean;
    static SaveModifiedScenesIfUserWantsTo(scenes: any[]): boolean;
    static MarkSceneDirty(scene: any): boolean;
    static MarkAllScenesDirty(): void;
    static GetSceneManagerSetup(): UnityEditor.SceneManagement.SceneSetup[];
    static RestoreSceneManagerSetup(value: UnityEditor.SceneManagement.SceneSetup[]): void;
    static DetectCrossSceneReferences(scene: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly loadedSceneCount: number;
    static preventCrossSceneReferences: boolean;
    // fields
  }
}
