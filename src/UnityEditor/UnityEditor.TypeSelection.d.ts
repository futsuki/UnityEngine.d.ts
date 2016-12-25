declare namespace UnityEditor {
  class TypeSelection {
    // constructors
    constructor(typeName: string, objects: any[]);
    // methods
    CompareTo(o: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    label: any;
    objects: any[];
  }
}
