declare namespace UnityEditor {
  class ObjectListArea {
    // constructors
    constructor(state: UnityEditor.ObjectListAreaState, owner: UnityEditor.EditorWindow, showNoneItem: boolean);
    // methods
    ShowObjectsInList(instanceIDs: number[]): void;
    Init(rect: any, hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, checkThumbnails: boolean): void;
    GetAssetStoreButtonText(): string;
    ShowAssetStoreHitCountWhileSearchingLocalAssetsChanged(): void;
    OnGUI(position: any, keyboardControlID: number): void;
    CanShowThumbnails(): boolean;
    OnEvent(): void;
    BeginRename(delay: number): boolean;
    EndRename(acceptChanges: boolean): void;
    IsSelected(instanceID: number): boolean;
    GetSelection(): number[];
    IsLastClickedItemVisible(): boolean;
    SelectAll(): void;
    InitSelection(selectedInstanceIDs: number[]): void;
    HandleKeyboard(checkKeyboardControl: boolean): void;
    OffsetSelection(selectionOffset: number): void;
    SelectFirst(): void;
    GetInstanceIDByIndex(index: number): number;
    Frame(instanceID: number, frame: boolean, ping: boolean): boolean;
    OnInspectorUpdate(): void;
    IsShowing(instanceID: number): boolean;
    IsShowingAny(instanceIDs: number[]): boolean;
    BeginPing(instanceID: number): void;
    EndPing(): void;
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
    repaintCallback: (() => void);
    itemSelectedCallback: ((boolean) => void);
    keyboardCallback: (() => void);
    gotKeyboardFocus: (() => void);
    assetStoreSearchEnded: (() => void);
    drawLocalAssetHeader: ((any) => number);
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
