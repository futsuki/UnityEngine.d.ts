declare namespace SimpleJson {
  class JsonObject extends System.Object {
    // constructors
    constructor();
    constructor(comparer: any);
    // methods
    Add(key: string, value: any): void;
    Add(item: any): void;
    ContainsKey(key: string): boolean;
    Remove(key: string): boolean;
    Remove(item: any): boolean;
    TryGetValue(key: string, value: any): boolean;
    Clear(): void;
    Contains(item: any): boolean;
    CopyTo(array: any[], arrayIndex: number): void;
    GetEnumerator(): any;
    ToString(): string;
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
