declare namespace UnityEditor {
  class SavedInt {
    // constructors
    constructor(name: string, value: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    value: number;
    // fields
  }
}
