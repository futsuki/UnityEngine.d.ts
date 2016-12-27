declare namespace UnityEditor {
  class ASMainWindow extends UnityEditor.EditorWindow {
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
    // properties
    NeedsSetup: boolean;
    readonly Error: boolean;
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
