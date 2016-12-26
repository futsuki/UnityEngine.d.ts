declare namespace UnityEditorInternal.VersionControl {
  class ListControl {
    // constructors
    constructor();
    // methods
    static FromID(id: number): UnityEditorInternal.VersionControl.ListControl;
    FindItemWithIdentifier(identifier: number): UnityEditorInternal.VersionControl.ListItem;
    Add(parent: UnityEditorInternal.VersionControl.ListItem, name: string, asset: UnityEditor.VersionControl.Asset): UnityEditorInternal.VersionControl.ListItem;
    Add(parent: UnityEditorInternal.VersionControl.ListItem, name: string, change: UnityEditor.VersionControl.ChangeSet): UnityEditorInternal.VersionControl.ListItem;
    Clear(): void;
    Refresh(): void;
    Refresh(updateExpanded: boolean): void;
    Sync(): void;
    OnGUI(area: any, focus: boolean): boolean;
    SelectedSet(item: UnityEditorInternal.VersionControl.ListItem): void;
    SelectedAll(): void;
    SelectedAdd(item: UnityEditorInternal.VersionControl.ListItem): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly listState: UnityEditorInternal.VersionControl.ListControl.ListState;
    ExpandEvent: UnityEditorInternal.VersionControl.ListControl.ExpandDelegate;
    DragEvent: UnityEditorInternal.VersionControl.ListControl.DragDelegate;
    ActionEvent: UnityEditorInternal.VersionControl.ListControl.ActionDelegate;
    readonly Root: UnityEditorInternal.VersionControl.ListItem;
    readonly SelectedAssets: UnityEditor.VersionControl.AssetList;
    readonly SelectedChangeSets: UnityEditor.VersionControl.ChangeSets;
    readonly EmptyChangeSets: UnityEditor.VersionControl.ChangeSets;
    ReadOnly: boolean;
    MenuFolder: string;
    MenuDefault: string;
    DragAcceptOnly: boolean;
    readonly Size: number;
    // fields
  }
}
