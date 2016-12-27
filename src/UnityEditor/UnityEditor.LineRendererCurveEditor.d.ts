declare namespace UnityEditor {
  class LineRendererCurveEditor extends System.Object {
    // constructors
    constructor();
    // methods
    OnEnable(serializedObject: UnityEditor.SerializedObject): void;
    OnDisable(): void;
    GetAxisScalars(): any;
    CheckCurveChangedExternally(): void;
    OnInspectorGUI(): void;
    // properties
    // fields
  }
}
