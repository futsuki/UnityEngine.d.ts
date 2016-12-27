declare namespace UnityEditor {
  class SceneHierarchyWindow extends UnityEditor.SearchableEditorWindow {
    // constructors
    constructor();
    // methods
    static GetAllSceneHierarchyWindows(): UnityEditor.SceneHierarchyWindow[];
    SetCurrentRootInstanceID(instanceID: number): void;
    GetCurrentVisibleObjects(): string[];
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    static IsSceneHeaderInHierarchyWindow(scene: any): boolean;
    SetExpandedRecursive(id: number, expand: boolean): void;
    ReloadData(): void;
    SearchChanged(): void;
    SetSortFunction(sortType: any): void;
    DirtySortingMethods(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    FrameObject(instanceID: number, ping: boolean): void;
    // properties
    static readonly lastInteractedHierarchyWindow: UnityEditor.SceneHierarchyWindow;
    static s_Debug: boolean;
    // fields
  }
}
