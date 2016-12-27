declare namespace UnityEditor.VersionControl {
  class AssetList {
    // constructors
    constructor();
    constructor(src: UnityEditor.VersionControl.AssetList);
    // methods
    Filter(includeFolder: boolean, states: UnityEditor.VersionControl.Asset.States[]): UnityEditor.VersionControl.AssetList;
    FilterCount(includeFolder: boolean, states: UnityEditor.VersionControl.Asset.States[]): number;
    FilterChildren(): UnityEditor.VersionControl.AssetList;
    Add(item: UnityEditor.VersionControl.Asset): void;
    AddRange(collection: any): void;
    AsReadOnly(): any;
    BinarySearch(item: UnityEditor.VersionControl.Asset): number;
    BinarySearch(item: UnityEditor.VersionControl.Asset, comparer: any): number;
    BinarySearch(index: number, count: number, item: UnityEditor.VersionControl.Asset, comparer: any): number;
    Clear(): void;
    Contains(item: UnityEditor.VersionControl.Asset): boolean;
    CopyTo(array: UnityEditor.VersionControl.Asset[]): void;
    CopyTo(array: UnityEditor.VersionControl.Asset[], arrayIndex: number): void;
    CopyTo(index: number, array: UnityEditor.VersionControl.Asset[], arrayIndex: number, count: number): void;
    Exists(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): boolean;
    Find(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): UnityEditor.VersionControl.Asset;
    FindAll(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): UnityEditor.VersionControl.Asset[];
    FindIndex(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    FindIndex(startIndex: number, match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    FindIndex(startIndex: number, count: number, match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    FindLast(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): UnityEditor.VersionControl.Asset;
    FindLastIndex(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    FindLastIndex(startIndex: number, match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    FindLastIndex(startIndex: number, count: number, match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    ForEach(action: ((obj: UnityEditor.VersionControl.Asset) => void)): void;
    GetEnumerator(): any;
    GetRange(index: number, count: number): UnityEditor.VersionControl.Asset[];
    IndexOf(item: UnityEditor.VersionControl.Asset): number;
    IndexOf(item: UnityEditor.VersionControl.Asset, index: number): number;
    IndexOf(item: UnityEditor.VersionControl.Asset, index: number, count: number): number;
    Insert(index: number, item: UnityEditor.VersionControl.Asset): void;
    InsertRange(index: number, collection: any): void;
    LastIndexOf(item: UnityEditor.VersionControl.Asset): number;
    LastIndexOf(item: UnityEditor.VersionControl.Asset, index: number): number;
    LastIndexOf(item: UnityEditor.VersionControl.Asset, index: number, count: number): number;
    Remove(item: UnityEditor.VersionControl.Asset): boolean;
    RemoveAll(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): number;
    RemoveAt(index: number): void;
    RemoveRange(index: number, count: number): void;
    Reverse(): void;
    Reverse(index: number, count: number): void;
    Sort(): void;
    Sort(comparer: any): void;
    Sort(comparison: ((x: UnityEditor.VersionControl.Asset, y: UnityEditor.VersionControl.Asset) => number)): void;
    Sort(index: number, count: number, comparer: any): void;
    ToArray(): UnityEditor.VersionControl.Asset[];
    TrimExcess(): void;
    TrueForAll(match: ((obj: UnityEditor.VersionControl.Asset) => boolean)): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): UnityEditor.VersionControl.Asset;
    set_Item(index: number, value: UnityEditor.VersionControl.Asset): void;
    // fields
  }
}
