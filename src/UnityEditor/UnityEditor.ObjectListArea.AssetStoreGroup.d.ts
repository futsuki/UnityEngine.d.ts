declare namespace UnityEditor.ObjectListArea {
  class AssetStoreGroup {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string, groupName: string);
    // methods
    UpdateAssets(): void;
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, showFoldersFirst: boolean): void;
    UpdateHeight(): void;
    IndexOf(assetID: number): number;
    AssetAtIndex(selectedIdx: number): UnityEditor.AssetStoreAsset;
    Draw(yOffset: number, scrollPos: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Name: string;
    Assets: any;
    readonly ItemCount: number;
    ListMode: boolean;
    readonly NeedItems: boolean;
    readonly NeedsRepaint: boolean;
    readonly Height: number;
    visiblePreference: boolean;
    // fields
    static kDefaultRowsShown: number;
    static kDefaultRowsShownListMode: number;
    m_Owner: UnityEditor.ObjectListArea;
    m_Grid: UnityEditor.VerticalGrid;
    m_Height: number;
    Visible: boolean;
    ItemsAvailable: number;
    ItemsWantedShown: number;
    m_LastClickedDrawTime: number;
  }
}
