declare namespace UnityEditor {
  class ColumnViewElement {
    // constructors
    constructor(name: string, value: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    name: string;
    value: any;
  }
}
