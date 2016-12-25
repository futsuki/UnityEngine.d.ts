declare namespace SimpleJson {
  class JsonArray {
    // constructors
    constructor();
    constructor(capacity: number);
    // methods
    ToString(): string;
    Add(item: any): any;
    AddRange(collection: any): any;
    AsReadOnly(): any;
    BinarySearch(item: any): number;
    BinarySearch(item: any, comparer: any): number;
    BinarySearch(index: number, count: number, item: any, comparer: any): number;
    Clear(): any;
    Contains(item: any): boolean;
    CopyTo(array: any[]): any;
    CopyTo(array: any[], arrayIndex: number): any;
    CopyTo(index: number, array: any[], arrayIndex: number, count: number): any;
    Exists(match: any): boolean;
    Find(match: any): any;
    FindAll(match: any): any;
    FindIndex(match: any): number;
    FindIndex(startIndex: number, match: any): number;
    FindIndex(startIndex: number, count: number, match: any): number;
    FindLast(match: any): any;
    FindLastIndex(match: any): number;
    FindLastIndex(startIndex: number, match: any): number;
    FindLastIndex(startIndex: number, count: number, match: any): number;
    ForEach(action: any): any;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any;
    IndexOf(item: any): number;
    IndexOf(item: any, index: number): number;
    IndexOf(item: any, index: number, count: number): number;
    Insert(index: number, item: any): any;
    InsertRange(index: number, collection: any): any;
    LastIndexOf(item: any): number;
    LastIndexOf(item: any, index: number): number;
    LastIndexOf(item: any, index: number, count: number): number;
    Remove(item: any): boolean;
    RemoveAll(match: any): number;
    RemoveAt(index: number): any;
    RemoveRange(index: number, count: number): any;
    Reverse(): any;
    Reverse(index: number, count: number): any;
    Sort(): any;
    Sort(comparer: any): any;
    Sort(comparison: any): any;
    Sort(index: number, count: number, comparer: any): any;
    ToArray(): any[];
    TrimExcess(): any;
    TrueForAll(match: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): any;
    set_Item(index: number, value: any): any;
    // fields
  }
}
