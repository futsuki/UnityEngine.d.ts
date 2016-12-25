declare namespace UnityEditor {
  class PListConfig {
    // constructors
    constructor(fileName: string);
    // methods
    Save(): any;
    Clear(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    get_Item(paramName: string): string;
    set_Item(paramName: string, value: string): any;
    // fields
  }
}
