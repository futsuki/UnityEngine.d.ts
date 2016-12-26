declare namespace UnityEditor {
  class ParentViewState {
    // constructors
    constructor();
    // methods
    GetLineCount(): number;
    HasTrue(): boolean;
    SetLineCount(): void;
    GetFoldersCount(): number;
    ClearSelection(): void;
    AddAssetItems(assets: UnityEditor.AssetsItem[]): void;
    AddAssetItems(assets: UnityEditor.Changeset): void;
    AddAssetItems(assets: UnityEditor.DeletedAsset[]): void;
    Clear(): void;
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
