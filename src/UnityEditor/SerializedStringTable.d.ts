  class SerializedStringTable {
    // constructors
    constructor();
    // methods
    Set(key: string, value: number): void;
    Set(key: string): void;
    Contains(key: string): boolean;
    Get(key: string): number;
    Remove(key: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly hashtable: any;
    readonly Length: number;
    // fields
  }
