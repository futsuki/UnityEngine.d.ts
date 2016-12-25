declare namespace UnityEditor.IMGUI.Controls {
  class TreeViewController {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, treeViewState: UnityEditor.IMGUI.Controls.TreeViewState);
    // methods
    Init(rect: any, data: UnityEditor.IMGUI.Controls.ITreeViewDataSource, gui: UnityEditor.IMGUI.Controls.ITreeViewGUI, dragging: UnityEditor.IMGUI.Controls.ITreeViewDragging): any;
    IsSelected(id: number): boolean;
    HasSelection(): boolean;
    GetSelection(): number[];
    GetRowIDs(): number[];
    SetSelection(selectedIDs: number[], revealSelectionAndFrameLastSelected: boolean): any;
    SetSelection(selectedIDs: number[], revealSelectionAndFrameLastSelected: boolean, animatedFraming: boolean): any;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    SetUseScrollView(useScrollView: boolean): any;
    Repaint(): any;
    ReloadData(): any;
    HasFocus(): boolean;
    HandleUnusedMouseEventsForItem(rect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number): any;
    GrabKeyboardFocus(): any;
    NotifyListenersThatSelectionChanged(): any;
    NotifyListenersThatDragEnded(draggedIDs: number[], draggedItemsFromOwnTreeView: boolean): any;
    GetContentSize(): any;
    GetTotalRect(): any;
    SetTotalRect(rect: any): any;
    IsItemDragSelectedOrSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnGUI(rect: any, keyboardControlID: number): any;
    UserInputChangedExpandedState(item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, expand: boolean): any;
    OnEvent(): any;
    BeginNameEditing(delay: number): boolean;
    EndNameEditing(acceptChanges: boolean): any;
    IsLastClickedPartOfRows(): boolean;
    OffsetSelection(offset: number): any;
    SelectionClick(itemClicked: UnityEditor.IMGUI.Controls.TreeViewItem, keepMultiSelection: boolean): any;
    RemoveSelection(): any;
    Frame(id: number, frame: boolean, ping: boolean): any;
    Frame(id: number, frame: boolean, ping: boolean, animated: boolean): any;
    EndPing(): any;
    SortIDsInVisiblityOrder(ids: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    selectionChangedCallback: any;
    itemDoubleClickedCallback: any;
    dragEndedCallback: any;
    contextClickItemCallback: any;
    contextClickOutsideItemsCallback: any;
    keyboardInputCallback: any;
    expandedStateChanged: any;
    searchChanged: any;
    scrollChanged: any;
    onGUIRowCallback: any;
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
