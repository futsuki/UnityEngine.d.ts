declare namespace UnityEditor {
  class EditorApplication {
    // constructors
    constructor();
    // methods
    static LoadLevelInPlayMode(path: string): any;
    static LoadLevelAdditiveInPlayMode(path: string): any;
    static LoadLevelAsyncInPlayMode(path: string): any;
    static LoadLevelAdditiveAsyncInPlayMode(path: string): any;
    static OpenProject(projectPath: string, args: string[]): any;
    static SaveAssets(): any;
    static Step(): any;
    static LockReloadAssemblies(): any;
    static ExecuteMenuItem(menuItemPath: string): boolean;
    static UnlockReloadAssemblies(): any;
    static Exit(returnValue: number): any;
    static RepaintProjectWindow(): any;
    static RepaintAnimationWindow(): any;
    static RepaintHierarchyWindow(): any;
    static DirtyHierarchyWindowSorting(): any;
    static Beep(): any;
    static NewScene(): any;
    static NewEmptyScene(): any;
    static OpenScene(path: string): boolean;
    static OpenSceneAdditive(path: string): any;
    static SaveScene(): boolean;
    static SaveScene(path: string): boolean;
    static SaveScene(path: string, saveAsCopy: boolean): boolean;
    static SaveCurrentSceneIfUserWantsTo(): boolean;
    static MarkSceneDirty(): any;
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
