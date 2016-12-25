declare namespace UnityEditor {
  class ObjectListArea {
    // constructors
    constructor(state: UnityEditor.ObjectListAreaState, owner: UnityEditor.EditorWindow, showNoneItem: boolean);
    // methods
    ShowObjectsInList(instanceIDs: number[]): any;
    Init(rect: any, hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, checkThumbnails: boolean): any;
    GetAssetStoreButtonText(): string;
    ShowAssetStoreHitCountWhileSearchingLocalAssetsChanged(): any;
    OnGUI(position: any, keyboardControlID: number): any;
    CanShowThumbnails(): boolean;
    OnEvent(): any;
    BeginRename(delay: number): boolean;
    EndRename(acceptChanges: boolean): any;
    IsSelected(instanceID: number): boolean;
    GetSelection(): number[];
    IsLastClickedItemVisible(): boolean;
    SelectAll(): any;
    InitSelection(selectedInstanceIDs: number[]): any;
    HandleKeyboard(checkKeyboardControl: boolean): any;
    OffsetSelection(selectionOffset: number): any;
    SelectFirst(): any;
    GetInstanceIDByIndex(index: number): number;
    Frame(instanceID: number, frame: boolean, ping: boolean): boolean;
    OnInspectorUpdate(): any;
    IsShowing(instanceID: number): boolean;
    IsShowingAny(instanceIDs: number[]): boolean;
    BeginPing(instanceID: number): any;
    EndPing(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    allowDragging: boolean;
    allowRenaming: boolean;
    allowMultiSelect: boolean;
    allowDeselection: boolean;
    allowFocusRendering: boolean;
    allowBuiltinResources: boolean;
    allowUserRenderingHook: boolean;
    allowFindNextShortcut: boolean;
    foldersFirst: boolean;
    repaintCallback: any;
    itemSelectedCallback: any;
    keyboardCallback: any;
    gotKeyboardFocus: any;
    assetStoreSearchEnded: any;
    drawLocalAssetHeader: any;
    gridSize: number;
    readonly minGridSize: number;
    readonly maxGridSize: number;
    readonly numItemsDisplayed: number;
    // fields
    selectedAssetStoreAsset: boolean;
    m_RequeryAssetStore: boolean;
    m_SpaceBetween: number;
    m_TopMargin: number;
    m_BottomMargin: number;
    m_RightMargin: number;
    m_LeftMargin: number;
  }
}
