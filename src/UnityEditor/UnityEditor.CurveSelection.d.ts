declare namespace UnityEditor {
  class CurveSelection extends System.Object {
    // constructors
    protected constructor();
    // methods
    CompareTo(_other: any): number;
    Equals(_other: any): boolean;
    GetHashCode(): number;
    // properties
    // fields
    curveID: number;
    key: number;
    semiSelected: boolean;
    type: UnityEditor.CurveSelection.SelectionType;
  }
}
