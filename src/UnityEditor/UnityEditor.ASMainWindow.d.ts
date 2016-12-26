declare namespace UnityEditor {
  class ASMainWindow {
    // constructors
    constructor();
    // methods
    LogError(errorStr: string): void;
    DoDiscardChanges(lastActionsResult: boolean): void;
    ShowConflictResolutions(conflicting: string[]): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    UpdateNeedsRefresh(): boolean;
    CommitNeedsRefresh(): boolean;
    CommitItemsChanged(): void;
    RevertProject(toRevision: number, changesets: UnityEditor.Changeset[]): void;
    ShowHistory(): void;
    InitUpdatePage(lastActionsResult: boolean): void;
    DisplayedItemsChanged(): void;
    InitOverviewPage(lastActionsResult: boolean): void;
    InitHistoryPage(lastActionsResult: boolean): void;
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
