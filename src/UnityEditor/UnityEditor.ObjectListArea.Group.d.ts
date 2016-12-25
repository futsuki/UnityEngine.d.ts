declare namespace UnityEditor.ObjectListArea {
  class Group {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string);
    // methods
    UpdateAssets(): any;
    UpdateHeight(): any;
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, showFoldersFirst: boolean): any;
    Draw(yOffset: number, scrollPos: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Height: number;
    readonly ItemCount: number;
    ListMode: boolean;
    readonly NeedsRepaint: boolean;
    visiblePreference: boolean;
    // fields
    m_Owner: UnityEditor.ObjectListArea;
    m_Grid: UnityEditor.VerticalGrid;
    m_Height: number;
    Visible: boolean;
    ItemsAvailable: number;
    ItemsWantedShown: number;
    m_LastClickedDrawTime: number;
  }
}
