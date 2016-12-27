declare namespace UnityEditor {
  class Effector2DEditor extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    static CheckEffectorWarnings(collider: any): void;
    // properties
    // fields
  }
}
