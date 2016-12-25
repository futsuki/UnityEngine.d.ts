declare namespace UnityEditor {
  class EditorCurveBinding {
    // constructors
    private constructor();
    // methods
    GetHashCode(): number;
    Equals(other: any): boolean;
    static FloatCurve(inPath: string, inType: any, inPropertyName: string): UnityEditor.EditorCurveBinding;
    static PPtrCurve(inPath: string, inType: any, inPropertyName: string): UnityEditor.EditorCurveBinding;
    ToString(): string;
    GetType(): any;
    // properties
    readonly isPPtrCurve: boolean;
    type: any;
    // fields
    path: string;
    propertyName: string;
  }
}
