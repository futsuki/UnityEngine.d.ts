declare namespace UnityEditor {
  class SceneHierarchyWindow {
    // constructors
    constructor();
    // methods
    static GetAllSceneHierarchyWindows(): any;
    SetCurrentRootInstanceID(instanceID: number): any;
    GetCurrentVisibleObjects(): string[];
    OnEnable(): any;
    OnDisable(): any;
    OnDestroy(): any;
    static IsSceneHeaderInHierarchyWindow(scene: any): boolean;
    SetExpandedRecursive(id: number, expand: boolean): any;
    ReloadData(): any;
    SearchChanged(): any;
    SetSortFunction(sortType: any): any;
    DirtySortingMethods(): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    FrameObject(instanceID: number, ping: boolean): any;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
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
