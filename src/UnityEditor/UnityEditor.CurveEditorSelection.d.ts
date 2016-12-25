declare namespace UnityEditor {
  class CurveEditorSelection {
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
    selectedCurves: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
