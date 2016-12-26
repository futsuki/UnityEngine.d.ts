declare namespace UnityEditor {
  class CurveSelection {
    // constructors
    private constructor();
    // methods
    CompareTo(_other: any): number;
    Equals(_other: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    curveID: number;
    key: number;
    semiSelected: boolean;
    type: UnityEditor.CurveSelection.SelectionType;
  }
}
