declare namespace UnityEditor.ObjectListArea {
  class Group extends System.Object {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string);
    // methods
    UpdateAssets(): void;
    UpdateHeight(): void;
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, showFoldersFirst: boolean): void;
    Draw(yOffset: number, scrollPos: any): void;
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
