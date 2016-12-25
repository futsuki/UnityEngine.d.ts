declare namespace UnityEditor {
  class LookDevPropertyInfo {
    // constructors
    constructor(type: UnityEditor.LookDevPropertyType);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly propertyType: UnityEditor.LookDevPropertyType;
    linked: boolean;
    // fields
  }
}
