declare namespace UnityEditor.VersionControl {
  class AssetList {
    // constructors
    constructor();
    constructor(src: UnityEditor.VersionControl.AssetList);
    // methods
    Filter(includeFolder: boolean, states: UnityEditor.VersionControl.Asset.States[]): UnityEditor.VersionControl.AssetList;
    FilterCount(includeFolder: boolean, states: UnityEditor.VersionControl.Asset.States[]): number;
    FilterChildren(): UnityEditor.VersionControl.AssetList;
    Add(item: UnityEditor.VersionControl.Asset): any;
    AddRange(collection: any): any;
    AsReadOnly(): any;
    BinarySearch(item: UnityEditor.VersionControl.Asset): number;
    BinarySearch(item: UnityEditor.VersionControl.Asset, comparer: any): number;
    BinarySearch(index: number, count: number, item: UnityEditor.VersionControl.Asset, comparer: any): number;
    Clear(): any;
    Contains(item: UnityEditor.VersionControl.Asset): boolean;
    CopyTo(array: UnityEditor.VersionControl.Asset[]): any;
    CopyTo(array: UnityEditor.VersionControl.Asset[], arrayIndex: number): any;
    CopyTo(index: number, array: UnityEditor.VersionControl.Asset[], arrayIndex: number, count: number): any;
    Exists(match: any): boolean;
    Find(match: any): UnityEditor.VersionControl.Asset;
    FindAll(match: any): any;
    FindIndex(match: any): number;
    FindIndex(startIndex: number, match: any): number;
    FindIndex(startIndex: number, count: number, match: any): number;
    FindLast(match: any): UnityEditor.VersionControl.Asset;
    FindLastIndex(match: any): number;
    FindLastIndex(startIndex: number, match: any): number;
    FindLastIndex(startIndex: number, count: number, match: any): number;
    ForEach(action: any): any;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any;
    IndexOf(item: UnityEditor.VersionControl.Asset): number;
    IndexOf(item: UnityEditor.VersionControl.Asset, index: number): number;
    IndexOf(item: UnityEditor.VersionControl.Asset, index: number, count: number): number;
    Insert(index: number, item: UnityEditor.VersionControl.Asset): any;
    InsertRange(index: number, collection: any): any;
    LastIndexOf(item: UnityEditor.VersionControl.Asset): number;
    LastIndexOf(item: UnityEditor.VersionControl.Asset, index: number): number;
    LastIndexOf(item: UnityEditor.VersionControl.Asset, index: number, count: number): number;
    Remove(item: UnityEditor.VersionControl.Asset): boolean;
    RemoveAll(match: any): number;
    RemoveAt(index: number): any;
    RemoveRange(index: number, count: number): any;
    Reverse(): any;
    Reverse(index: number, count: number): any;
    Sort(): any;
    Sort(comparer: any): any;
    Sort(comparison: any): any;
    Sort(index: number, count: number, comparer: any): any;
    ToArray(): UnityEditor.VersionControl.Asset[];
    TrimExcess(): any;
    TrueForAll(match: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): UnityEditor.VersionControl.Asset;
    set_Item(index: number, value: UnityEditor.VersionControl.Asset): any;
    // fields
  }
}
