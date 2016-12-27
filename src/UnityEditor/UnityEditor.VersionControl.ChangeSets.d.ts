declare namespace UnityEditor.VersionControl {
  class ChangeSets {
    // constructors
    constructor();
    // methods
    Add(item: UnityEditor.VersionControl.ChangeSet): void;
    AddRange(collection: any): void;
    AsReadOnly(): any;
    BinarySearch(item: UnityEditor.VersionControl.ChangeSet): number;
    BinarySearch(item: UnityEditor.VersionControl.ChangeSet, comparer: any): number;
    BinarySearch(index: number, count: number, item: UnityEditor.VersionControl.ChangeSet, comparer: any): number;
    Clear(): void;
    Contains(item: UnityEditor.VersionControl.ChangeSet): boolean;
    CopyTo(array: UnityEditor.VersionControl.ChangeSet[]): void;
    CopyTo(array: UnityEditor.VersionControl.ChangeSet[], arrayIndex: number): void;
    CopyTo(index: number, array: UnityEditor.VersionControl.ChangeSet[], arrayIndex: number, count: number): void;
    Exists(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): boolean;
    Find(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): UnityEditor.VersionControl.ChangeSet;
    FindAll(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): any;
    FindIndex(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    FindIndex(startIndex: number, match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    FindIndex(startIndex: number, count: number, match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    FindLast(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): UnityEditor.VersionControl.ChangeSet;
    FindLastIndex(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    FindLastIndex(startIndex: number, match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    FindLastIndex(startIndex: number, count: number, match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    ForEach(action: ((UnityEditor.VersionControl.ChangeSet) => void)): void;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet): number;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number): number;
    IndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number, count: number): number;
    Insert(index: number, item: UnityEditor.VersionControl.ChangeSet): void;
    InsertRange(index: number, collection: any): void;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet): number;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number): number;
    LastIndexOf(item: UnityEditor.VersionControl.ChangeSet, index: number, count: number): number;
    Remove(item: UnityEditor.VersionControl.ChangeSet): boolean;
    RemoveAll(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): number;
    RemoveAt(index: number): void;
    RemoveRange(index: number, count: number): void;
    Reverse(): void;
    Reverse(index: number, count: number): void;
    Sort(): void;
    Sort(comparer: any): void;
    Sort(comparison: ((UnityEditor.VersionControl.ChangeSet, UnityEditor.VersionControl.ChangeSet) => number)): void;
    Sort(index: number, count: number, comparer: any): void;
    ToArray(): UnityEditor.VersionControl.ChangeSet[];
    TrimExcess(): void;
    TrueForAll(match: ((UnityEditor.VersionControl.ChangeSet) => boolean)): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): UnityEditor.VersionControl.ChangeSet;
    set_Item(index: number, value: UnityEditor.VersionControl.ChangeSet): void;
    // fields
  }
}
