declare namespace UnityEditor {
  class EditorApplication extends System.Object {
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
    static projectWindowItemOnGUI: ((guid: string, selectionRect: any) => void);
    static hierarchyWindowItemOnGUI: ((instanceID: number, selectionRect: any) => void);
    static update: (() => void);
    static delayCall: (() => void);
    static hierarchyWindowChanged: (() => void);
    static projectWindowChanged: (() => void);
    static searchChanged: (() => void);
    static modifierKeysChanged: (() => void);
    static playmodeStateChanged: (() => void);
  }
}
