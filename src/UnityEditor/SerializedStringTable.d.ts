  class SerializedStringTable extends System.Object {
    // constructors
    constructor();
    // methods
    Set(key: string, value: number): void;
    Set(key: string): void;
    Contains(key: string): boolean;
    Get(key: string): number;
    Remove(key: string): void;
    // properties
    readonly hashtable: any;
    readonly Length: number;
    // fields
  }
