declare namespace UnityEditor.ObjectListArea {
  class LocalGroup {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string, showNone: boolean);
    // methods
    UpdateAssets(): any;
    UpdateHeight(): any;
    IsAnyLastRenderedAssetsDirty(): boolean;
    ChangeExpandedState(instanceID: number, expanded: boolean): any;
    GetVisibleNameAndInstanceIDs(): any;
    GetInstanceIDs(): any;
    GetNewSelection(clickedInstanceID: number, beginOfDrag: boolean, useShiftAsActionKey: boolean): any;
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, foldersFirst: boolean): any;
    GetNameOfLocalAsset(instanceID: number): string;
    IsBuiltinAsset(instanceID: number): boolean;
    InitBuiltinResources(): any;
    PrintBuiltinResourcesAvailable(): any;
    IndexOfNewText(newText: string, isCreatingNewFolder: boolean, foldersFirst: boolean): number;
    IndexOf(instanceID: number): number;
    LookupByInstanceID(instanceID: number): UnityEditor.FilteredHierarchy.FilterResult;
    InstanceIdAtIndex(index: number, instanceID: any): boolean;
    StartDrag(draggedInstanceID: number, selectedInstanceIDs: any): any;
    DoDrag(dragToInstanceID: number, perform: boolean): UnityEditor.DragAndDropVisualMode;
    DoCharacterOffsetSelection(): boolean;
    ShowObjectsInList(instanceIDs: number[]): any;
    static DrawIconAndLabel(rect: any, filterItem: UnityEditor.FilteredHierarchy.FilterResult, label: string, icon: any, selected: boolean, focus: boolean): any;
    Draw(yOffset: number, scrollPos: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly ShowNone: boolean;
    readonly NeedsRepaint: boolean;
    readonly searchFilter: UnityEditor.SearchFilter;
    ListMode: boolean;
    readonly HasBuiltinResources: boolean;
    readonly ItemCount: number;
    readonly Height: number;
    visiblePreference: boolean;
    // fields
    m_ListMode: boolean;
    static k_ListModeLeftPadding: number;
    static k_ListModeLeftPaddingForSubAssets: number;
    static k_ListModeVersionControlOverlayPadding: number;
    m_Owner: UnityEditor.ObjectListArea;
    m_Grid: UnityEditor.VerticalGrid;
    m_Height: number;
    Visible: boolean;
    ItemsAvailable: number;
    ItemsWantedShown: number;
    m_LastClickedDrawTime: number;
  }
}
