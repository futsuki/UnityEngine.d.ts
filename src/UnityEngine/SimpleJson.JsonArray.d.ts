declare namespace SimpleJson {
  class JsonArray {
    // constructors
    constructor();
    constructor(capacity: number);
    // methods
    ToString(): string;
    Add(item: any): void;
    AddRange(collection: any): void;
    AsReadOnly(): any;
    BinarySearch(item: any): number;
    BinarySearch(item: any, comparer: any): number;
    BinarySearch(index: number, count: number, item: any, comparer: any): number;
    Clear(): void;
    Contains(item: any): boolean;
    CopyTo(array: any[]): void;
    CopyTo(array: any[], arrayIndex: number): void;
    CopyTo(index: number, array: any[], arrayIndex: number, count: number): void;
    Exists(match: ((obj: any) => boolean)): boolean;
    Find(match: ((obj: any) => boolean)): any;
    FindAll(match: ((obj: any) => boolean)): any[];
    FindIndex(match: ((obj: any) => boolean)): number;
    FindIndex(startIndex: number, match: ((obj: any) => boolean)): number;
    FindIndex(startIndex: number, count: number, match: ((obj: any) => boolean)): number;
    FindLast(match: ((obj: any) => boolean)): any;
    FindLastIndex(match: ((obj: any) => boolean)): number;
    FindLastIndex(startIndex: number, match: ((obj: any) => boolean)): number;
    FindLastIndex(startIndex: number, count: number, match: ((obj: any) => boolean)): number;
    ForEach(action: ((obj: any) => void)): void;
    GetEnumerator(): any;
    GetRange(index: number, count: number): any[];
    IndexOf(item: any): number;
    IndexOf(item: any, index: number): number;
    IndexOf(item: any, index: number, count: number): number;
    Insert(index: number, item: any): void;
    InsertRange(index: number, collection: any): void;
    LastIndexOf(item: any): number;
    LastIndexOf(item: any, index: number): number;
    LastIndexOf(item: any, index: number, count: number): number;
    Remove(item: any): boolean;
    RemoveAll(match: ((obj: any) => boolean)): number;
    RemoveAt(index: number): void;
    RemoveRange(index: number, count: number): void;
    Reverse(): void;
    Reverse(index: number, count: number): void;
    Sort(): void;
    Sort(comparer: any): void;
    Sort(comparison: ((x: any, y: any) => number)): void;
    Sort(index: number, count: number, comparer: any): void;
    ToArray(): any[];
    TrimExcess(): void;
    TrueForAll(match: ((obj: any) => boolean)): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    Capacity: number;
    readonly Count: number;
    get_Item(index: number): any;
    set_Item(index: number, value: any): void;
    // fields
  }
}
