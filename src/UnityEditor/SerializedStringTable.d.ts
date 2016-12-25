  class SerializedStringTable {
    // constructors
    constructor();
    // methods
    Set(key: string, value: number): any;
    Set(key: string): any;
    Contains(key: string): boolean;
    Get(key: string): number;
    Remove(key: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly hashtable: any;
    readonly Length: number;
    // fields
  }
