declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewController extends System.Object {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState);
    // methods
    Init(rect: any, data: UnityEditor.IMGUI.Controls.ITreeViewDataSource, gui: UnityEditor.IMGUI.Controls.ITreeViewGUI, dragging: UnityEditor.IMGUI.Controls.ITreeViewDragging): void;
    IsSelected(id: number): boolean;
    HasSelection(): boolean;
    GetSelection(): number[];
    GetRowIDs(): number[];
    SetSelection(selectedIDs: number[], revealSelectionAndFrameLastSelected: boolean): void;
    SetSelection(selectedIDs: number[], revealSelectionAndFrameLastSelected: boolean, animatedFraming: boolean): void;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    SetUseScrollView(useScrollView: boolean): void;
    Repaint(): void;
    ReloadData(): void;
    HasFocus(): boolean;
    HandleUnusedMouseEventsForItem(rect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number): void;
    GrabKeyboardFocus(): void;
    NotifyListenersThatSelectionChanged(): void;
    NotifyListenersThatDragEnded(draggedIDs: number[], draggedItemsFromOwnTreeView: boolean): void;
    GetContentSize(): any;
    GetTotalRect(): any;
    SetTotalRect(rect: any): void;
    IsItemDragSelectedOrSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnGUI(rect: any, keyboardControlID: number): void;
    UserInputChangedExpandedState(item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, expand: boolean): void;
    OnEvent(): void;
    BeginNameEditing(delay: number): boolean;
    EndNameEditing(acceptChanges: boolean): void;
    IsLastClickedPartOfRows(): boolean;
    OffsetSelection(offset: number): void;
    SelectionClick(itemClicked: UnityEditor.IMGUI.Controls.TreeViewItem, keepMultiSelection: boolean): void;
    RemoveSelection(): void;
    Frame(id: number, frame: boolean, ping: boolean): void;
    Frame(id: number, frame: boolean, ping: boolean, animated: boolean): void;
    EndPing(): void;
    SortIDsInVisiblityOrder(ids: number[]): number[];
    // properties
    selectionChangedCallback: ((obj: number[]) => void);
    itemDoubleClickedCallback: ((obj: number) => void);
    dragEndedCallback: ((arg1: number[], arg2: boolean) => void);
    contextClickItemCallback: ((obj: number) => void);
    contextClickOutsideItemsCallback: (() => void);
    keyboardInputCallback: (() => void);
    expandedStateChanged: (() => void);
    searchChanged: ((obj: string) => void);
    scrollChanged: ((obj: any) => void);
    onGUIRowCallback: ((arg1: number, arg2: any) => void);
    data: UnityEditor.IMGUI.Controls.ITreeViewDataSource;
    dragging: UnityEditor.IMGUI.Controls.ITreeViewDragging;
    gui: UnityEditor.IMGUI.Controls.ITreeViewGUI;
    state: UnityEditor.IMGUI.Controls.TreeViewState;
    readonly expansionAnimator: UnityEditor.IMGUI.Controls.TreeViewItemExpansionAnimator;
    deselectOnUnhandledMouseDown: boolean;
    useExpansionAnimation: boolean;
    readonly isSearching: boolean;
    readonly isDragging: boolean;
    searchString: string;
    // fields
  }
}
