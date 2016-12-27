declare namespace UnityEditor.ObjectListArea {
  class AssetStoreGroup extends UnityEditor.ObjectListArea.Group {
    // constructors
    constructor(owner: UnityEditor.ObjectListArea, groupTitle: string, groupName: string);
    // methods
    UpdateAssets(): void;
    UpdateFilter(hierarchyType: UnityEditor.HierarchyType, searchFilter: UnityEditor.SearchFilter, showFoldersFirst: boolean): void;
    UpdateHeight(): void;
    IndexOf(assetID: number): number;
    AssetAtIndex(selectedIdx: number): UnityEditor.AssetStoreAsset;
    // properties
    readonly Name: string;
    Assets: UnityEditor.AssetStoreAsset[];
    readonly ItemCount: number;
    ListMode: boolean;
    readonly NeedItems: boolean;
    readonly NeedsRepaint: boolean;
    // fields
    static kDefaultRowsShown: number;
    static kDefaultRowsShownListMode: number;
  }
}
