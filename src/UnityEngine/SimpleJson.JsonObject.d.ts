declare namespace SimpleJson {
  class JsonObject {
    // constructors
    constructor();
    constructor(comparer: any);
    // methods
    Add(key: string, value: any): void;
    ContainsKey(key: string): boolean;
    Remove(key: string): boolean;
    TryGetValue(key: string, value: any): boolean;
    Add(item: any): void;
    Clear(): void;
    Contains(item: any): boolean;
    CopyTo(array: any[], arrayIndex: number): void;
    Remove(item: any): boolean;
    GetEnumerator(): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    get_Item(index: number): any;
    readonly Keys: any;
    readonly Values: any;
    get_Item(key: string): any;
    set_Item(key: string, value: any): void;
    readonly Count: number;
    readonly IsReadOnly: boolean;
    // fields
  }
}
