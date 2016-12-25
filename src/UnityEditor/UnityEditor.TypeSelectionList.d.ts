declare namespace UnityEditor {
  class TypeSelectionList {
    // constructors
    constructor(objects: any[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly typeSelections: any;
    // fields
  }
}
