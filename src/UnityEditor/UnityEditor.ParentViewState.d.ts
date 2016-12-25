declare namespace UnityEditor {
  class ParentViewState {
    // constructors
    constructor();
    // methods
    GetLineCount(): number;
    HasTrue(): boolean;
    SetLineCount(): any;
    GetFoldersCount(): number;
    ClearSelection(): any;
    AddAssetItems(assets: UnityEditor.AssetsItem[]): any;
    AddAssetItems(assets: UnityEditor.Changeset): any;
    AddAssetItems(assets: UnityEditor.DeletedAsset[]): any;
    Clear(): any;
    NextFileFolder(folder: any, file: any): boolean;
    IndexToFolderAndFile(index: number, folder: any, file: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    lv: UnityEditor.ListViewState;
    selectedFolder: number;
    selectedFile: number;
    initialSelectedItem: number;
    folders: UnityEditor.ParentViewFolder[];
    selectedItems: boolean[];
  }
}
