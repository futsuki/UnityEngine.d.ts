declare namespace UnityEditor.ModuleUI {
  class CurveStateCallbackData {
    // constructors
    constructor(state: UnityEditor.MinMaxCurveState, curves: UnityEditor.SerializedMinMaxCurve[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    minMaxCurves: UnityEditor.SerializedMinMaxCurve[];
    selectedState: UnityEditor.MinMaxCurveState;
  }
}
