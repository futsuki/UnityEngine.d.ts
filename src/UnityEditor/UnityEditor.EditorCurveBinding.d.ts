declare namespace UnityEditor {
  class EditorCurveBinding extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    static FloatCurve(inPath: string, inType: any, inPropertyName: string): UnityEditor.EditorCurveBinding;
    static PPtrCurve(inPath: string, inType: any, inPropertyName: string): UnityEditor.EditorCurveBinding;
    // properties
    readonly isPPtrCurve: boolean;
    type: any;
    // fields
    path: string;
    propertyName: string;
  }
}
