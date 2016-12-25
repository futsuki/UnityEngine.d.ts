declare namespace UnityEditor {
  class ASMainWindow {
    // constructors
    constructor();
    // methods
    LogError(errorStr: string): any;
    DoDiscardChanges(lastActionsResult: boolean): any;
    ShowConflictResolutions(conflicting: string[]): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    UpdateNeedsRefresh(): boolean;
    CommitNeedsRefresh(): boolean;
    CommitItemsChanged(): any;
    RevertProject(toRevision: number, changesets: UnityEditor.Changeset[]): any;
    ShowHistory(): any;
    InitUpdatePage(lastActionsResult: boolean): any;
    DisplayedItemsChanged(): any;
    InitOverviewPage(lastActionsResult: boolean): any;
    InitHistoryPage(lastActionsResult: boolean): any;
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
    NeedsSetup: boolean;
    readonly Error: boolean;
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
    static constants: UnityEditor.ASMainWindow.Constants;
    sharedCommits: UnityEditor.AssetsItem[];
    sharedDeletedItems: UnityEditor.AssetsItem[];
    sharedChangesets: UnityEditor.Changeset[];
    m_ShowSearch: UnityEditor.ASMainWindow.ShowSearchField;
    m_SearchToShow: UnityEditor.ASMainWindow.ShowSearchField;
    m_SearchField: UnityEditor.ASMainWindow.SearchField;
  }
}
