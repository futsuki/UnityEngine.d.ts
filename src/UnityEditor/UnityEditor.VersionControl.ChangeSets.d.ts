declare namespace UnityEditor.VersionControl {
  class ChangeSets {
    // constructors
    constructor();
    // methods
    Add(item: UnityEditor.VersionControl.ChangeSet): any;
    AddRange(collection: any): any;
    AsReadOnly(): any;
    BinarySearch(item: UnityEditor.VersionControl.ChangeSet): number;
    BinarySearch(item: UnityEditor.VersionControl.ChangeSet, comparer: any): number;
    BinarySearch(index: number, count: number, item: UnityEditor.VersionControl.ChangeSet, comparer: any): number;
    Clear(): any;
    Contains(item: UnityEditor.VersionControl.ChangeSet): boolean;
    CopyTo(array: UnityEditor.VersionControl.ChangeSet[]): any;
    CopyTo(array: UnityEditor.VersionControl.ChangeSet[], arrayIndex: number): any;
    CopyTo(index: number, array: UnityEditor.VersionControl.ChangeSet[], arrayIndex: number, count: number): any;
    Exists(match: any): boolean;
    Find(match: any): UnityEditor.VersionControl.ChangeSet;
    FindAll(match: any): any;
    FindIndex(match: any): number;
    FindIndex(startIndex: number, match: any): number;
    FindIndex(startIndex: number, count: number, match: any): number;
    FindLast(match: any): UnityEditor.VersionControl.ChangeSet;
    FindLastIndex(match: any): number;
    FindLastIndex(startIndex: number, match: any): number;
    FindLastIndex(startIndex: number, count: number, match: any): number;
    ForEach(action: any): any;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet): number;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number): number;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number, count: number): number;
    Insert(index: number, item: UnityEditor.VersionControl.ChangeSet): any;
    InsertRange(index: number, collection: any): any;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet): number;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number): number;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number, count: number): number;
    Remove(item: UnityEditor.VersionControl.ChangeSet): boolean;
    RemoveAll(match: any): number;
    RemoveAt(index: number): any;
    RemoveRange(index: number, count: number): any;
    Reverse(): any;
    Reverse(index: number, count: number): any;
    Sort(): any;
    Sort(comparer: any): any;
    Sort(comparison: any): any;
    Sort(index: number, count: number, comparer: any): any;
    ToArray(): UnityEditor.VersionControl.ChangeSet[];
    TrimExcess(): any;
    TrueForAll(match: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): UnityEditor.VersionControl.ChangeSet;
    set_Item(index: number, value: UnityEditor.VersionControl.ChangeSet): any;
    // fields
  }
}
