declare namespace UnityEditor {
  class ChangedCurve {
    // constructors
    constructor(curve: any, curveId: number, binding: UnityEditor.EditorCurveBinding);
    // methods
    GetHashCode(): number;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    curve: any;
    curveId: number;
    binding: UnityEditor.EditorCurveBinding;
  }
}
