declare namespace UnityEditor {
  class ProjectBrowser {
    // constructors
    private constructor();
    // methods
    static GetAllProjectBrowsers(): any;
    Initialized(): boolean;
    Init(): void;
    SetSearch(searchString: string): void;
    SetSearch(searchFilter: UnityEditor.SearchFilter): void;
    static ShowAssetStoreHitsWhileSearchingLocalAssetsChanged(): void;
    TypeListCallback(element: UnityEditor.PopupList.ListElement): void;
    AssetLabelListCallback(element: UnityEditor.PopupList.ListElement): void;
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
    readonly listAreaGridSize: number;
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
    static s_LastInteractedProjectBrowser: UnityEditor.ProjectBrowser;
    m_SearchAllAssets: any;
    m_SearchInFolders: any;
    m_SearchAssetStore: any;
  }
}
