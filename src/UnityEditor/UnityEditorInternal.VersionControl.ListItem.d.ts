declare namespace UnityEditorInternal.VersionControl {
  class ListItem {
    // constructors
    constructor();
    // methods
    HasPath(): boolean;
    IsChildOf(listItem: UnityEditorInternal.VersionControl.ListItem): boolean;
    Clear(): void;
    Add(listItem: UnityEditorInternal.VersionControl.ListItem): void;
    Remove(listItem: UnityEditorInternal.VersionControl.ListItem): boolean;
    RemoveAll(): void;
    FindWithIdentifierRecurse(inIdentifier: number): UnityEditorInternal.VersionControl.ListItem;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Icon: any;
    readonly Identifier: number;
    Name: string;
    Indent: number;
    Item: any;
    Asset: UnityEditor.VersionControl.Asset;
    Change: UnityEditor.VersionControl.ChangeSet;
    Expanded: boolean;
    Exclusive: boolean;
    Dummy: boolean;
    Hidden: boolean;
    readonly HasChildren: boolean;
    readonly HasActions: boolean;
    Actions: string[];
    readonly CanExpand: boolean;
    CanAccept: boolean;
    readonly OpenCount: number;
    readonly ChildCount: number;
    readonly Parent: UnityEditorInternal.VersionControl.ListItem;
    readonly FirstChild: UnityEditorInternal.VersionControl.ListItem;
    readonly LastChild: UnityEditorInternal.VersionControl.ListItem;
    readonly Prev: UnityEditorInternal.VersionControl.ListItem;
    readonly Next: UnityEditorInternal.VersionControl.ListItem;
    readonly PrevOpen: UnityEditorInternal.VersionControl.ListItem;
    readonly NextOpen: UnityEditorInternal.VersionControl.ListItem;
    readonly PrevOpenSkip: UnityEditorInternal.VersionControl.ListItem;
    readonly NextOpenSkip: UnityEditorInternal.VersionControl.ListItem;
    readonly PrevOpenVisible: UnityEditorInternal.VersionControl.ListItem;
    readonly NextOpenVisible: UnityEditorInternal.VersionControl.ListItem;
    // fields
  }
}
