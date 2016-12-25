declare namespace UnityEditor {
  class GUIStyleHolder {
    // constructors
    constructor();
    // methods
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    inspectedStyle: any;
  }
}
