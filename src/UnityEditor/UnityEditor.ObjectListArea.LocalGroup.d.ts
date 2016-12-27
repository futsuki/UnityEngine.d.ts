declare namespace UnityEditor.ObjectListArea {
  class LocalGroup extends UnityEditor.ObjectListArea.Group {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string, showNone: boolean);
    // methods
    UpdateAssets(): void;
    UpdateHeight(): void;
    IsAnyLastRenderedAssetsDirty(): boolean;
    ChangeExpandedState(instanceID: number, expanded: boolean): void;
    GetVisibleNameAndInstanceIDs(): any[];
    GetInstanceIDs(): number[];
    GetNewSelection(clickedInstanceID: number, beginOfDrag: boolean, useShiftAsActionKey: boolean): number[];
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, foldersFirst: boolean): void;
    GetNameOfLocalAsset(instanceID: number): string;
    IsBuiltinAsset(instanceID: number): boolean;
    InitBuiltinResources(): void;
    PrintBuiltinResourcesAvailable(): void;
    IndexOfNewText(newText: string, isCreatingNewFolder: boolean, foldersFirst: boolean): number;
    IndexOf(instanceID: number): number;
    LookupByInstanceID(instanceID: number): UnityEditor.FilteredHierarchy.FilterResult;
    InstanceIdAtIndex(index: number, instanceID: any): boolean;
    StartDrag(draggedInstanceID: number, selectedInstanceIDs: number[]): void;
    DoDrag(dragToInstanceID: number, perform: boolean): UnityEditor.DragAndDropVisualMode;
    DoCharacterOffsetSelection(): boolean;
    ShowObjectsInList(instanceIDs: number[]): void;
    static DrawIconAndLabel(rect: any, filterItem: UnityEditor.FilteredHierarchy.FilterResult, label: string, icon: any, selected: boolean, focus: boolean): void;
    // properties
    readonly ShowNone: boolean;
    readonly NeedsRepaint: boolean;
    readonly searchFilter: UnityEditor.SearchFilter;
    ListMode: boolean;
    readonly HasBuiltinResources: boolean;
    readonly ItemCount: number;
    // fields
    m_ListMode: boolean;
    static k_ListModeLeftPadding: number;
    static k_ListModeLeftPaddingForSubAssets: number;
    static k_ListModeVersionControlOverlayPadding: number;
  }
}
