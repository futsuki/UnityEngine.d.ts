declare namespace UnityEditor {
  class SavedBool {
    // constructors
    constructor(name: string, value: boolean);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    value: boolean;
    // fields
  }
}
