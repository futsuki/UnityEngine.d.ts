declare namespace SimpleJson {
  class JsonObject {
    // constructors
    constructor();
    constructor(comparer: any);
    // methods
    Add(key: string, value: any): any;
    ContainsKey(key: string): boolean;
    Remove(key: string): boolean;
    TryGetValue(key: string, value: any): boolean;
    Add(item: any): any;
    Clear(): any;
    Contains(item: any): boolean;
    CopyTo(array: any[], arrayIndex: number): any;
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
    set_Item(key: string, value: any): any;
    readonly Count: number;
    readonly IsReadOnly: boolean;
    // fields
  }
}
