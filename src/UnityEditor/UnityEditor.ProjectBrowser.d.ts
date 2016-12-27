declare namespace UnityEditor {
  class ProjectBrowser extends UnityEditor.EditorWindow {
    // constructors
    protected constructor();
    // methods
    static GetAllProjectBrowsers(): UnityEditor.ProjectBrowser[];
    Initialized(): boolean;
    Init(): void;
    SetSearch(searchString: string): void;
    SetSearch(searchFilter: UnityEditor.SearchFilter): void;
    static ShowAssetStoreHitsWhileSearchingLocalAssetsChanged(): void;
    TypeListCallback(element: UnityEditor.PopupList.ListElement): void;
    AssetLabelListCallback(element: UnityEditor.PopupList.ListElement): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    FrameObject(instanceID: number, ping: boolean): void;
    // properties
    readonly listAreaGridSize: number;
    // fields
    static s_LastInteractedProjectBrowser: UnityEditor.ProjectBrowser;
    m_SearchAllAssets: any;
    m_SearchInFolders: any;
    m_SearchAssetStore: any;
  }
}
