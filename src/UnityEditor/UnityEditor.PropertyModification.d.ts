declare namespace UnityEditor {
  class PropertyModification {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    target: any;
    propertyPath: string;
    value: string;
    objectReference: any;
  }
}
