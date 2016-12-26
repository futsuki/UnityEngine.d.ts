declare namespace UnityEditor {
  class TransformRotationGUI {
    // constructors
    constructor();
    // methods
    OnEnable(m_Rotation: UnityEditor.SerializedProperty, label: any): void;
    RotationField(): void;
    RotationField(disabled: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
