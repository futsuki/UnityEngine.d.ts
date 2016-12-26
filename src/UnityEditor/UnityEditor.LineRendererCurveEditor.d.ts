declare namespace UnityEditor {
  class LineRendererCurveEditor {
    // constructors
    constructor();
    // methods
    OnEnable(serializedObject: UnityEditor.SerializedObject): void;
    OnDisable(): void;
    GetAxisScalars(): any;
    CheckCurveChangedExternally(): void;
    OnInspectorGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
