declare namespace UnityEditor {
  class SceneHierarchyWindow {
    // constructors
    constructor();
    // methods
    static GetAllSceneHierarchyWindows(): any;
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
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static readonly lastInteractedHierarchyWindow: UnityEditor.SceneHierarchyWindow;
    static s_Debug: boolean;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
