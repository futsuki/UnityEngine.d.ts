declare namespace UnityEditor {
  class EditorApplication {
    // constructors
    constructor();
    // methods
    static LoadLevelInPlayMode(path: string): void;
    static LoadLevelAdditiveInPlayMode(path: string): void;
    static LoadLevelAsyncInPlayMode(path: string): any;
    static LoadLevelAdditiveAsyncInPlayMode(path: string): any;
    static OpenProject(projectPath: string, args: string[]): void;
    static SaveAssets(): void;
    static Step(): void;
    static LockReloadAssemblies(): void;
    static ExecuteMenuItem(menuItemPath: string): boolean;
    static UnlockReloadAssemblies(): void;
    static Exit(returnValue: number): void;
    static RepaintProjectWindow(): void;
    static RepaintAnimationWindow(): void;
    static RepaintHierarchyWindow(): void;
    static DirtyHierarchyWindowSorting(): void;
    static Beep(): void;
    static NewScene(): void;
    static NewEmptyScene(): void;
    static OpenScene(path: string): boolean;
    static OpenSceneAdditive(path: string): void;
    static SaveScene(): boolean;
    static SaveScene(path: string): boolean;
    static SaveScene(path: string, saveAsCopy: boolean): boolean;
    static SaveCurrentSceneIfUserWantsTo(): boolean;
    static MarkSceneDirty(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static isPlaying: boolean;
    static readonly isPlayingOrWillChangePlaymode: boolean;
    static isPaused: boolean;
    static readonly isCompiling: boolean;
    static readonly isUpdating: boolean;
    static readonly isRemoteConnected: boolean;
    static readonly applicationContentsPath: string;
    static readonly applicationPath: string;
    static readonly timeSinceStartup: number;
    static readonly isSceneDirty: boolean;
    static currentScene: string;
    // fields
    static projectWindowItemOnGUI: UnityEditor.EditorApplication.ProjectWindowItemCallback;
    static hierarchyWindowItemOnGUI: UnityEditor.EditorApplication.HierarchyWindowItemCallback;
    static update: UnityEditor.EditorApplication.CallbackFunction;
    static delayCall: UnityEditor.EditorApplication.CallbackFunction;
    static hierarchyWindowChanged: UnityEditor.EditorApplication.CallbackFunction;
    static projectWindowChanged: UnityEditor.EditorApplication.CallbackFunction;
    static searchChanged: UnityEditor.EditorApplication.CallbackFunction;
    static modifierKeysChanged: UnityEditor.EditorApplication.CallbackFunction;
    static playmodeStateChanged: UnityEditor.EditorApplication.CallbackFunction;
  }
}
