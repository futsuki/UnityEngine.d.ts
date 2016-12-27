declare namespace UnityEditor {
  class ChangedCurve extends System.Object {
    // constructors
    constructor(curve: any, curveId: number, binding: UnityEditor.EditorCurveBinding);
    // methods
    GetHashCode(): number;
    // properties
    // fields
    curve: any;
    curveId: number;
    binding: UnityEditor.EditorCurveBinding;
  }
}
