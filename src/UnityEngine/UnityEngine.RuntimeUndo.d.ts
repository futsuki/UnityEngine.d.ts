declare namespace UnityEngine {
  class RuntimeUndo extends System.Object {
    // constructors
    constructor();
    // methods
    static SetTransformParent(transform: UnityEngine.Transform, newParent: UnityEngine.Transform, name: string): void;
    static RecordObject(objectToUndo: UnityEngine.Object, name: string): void;
    static RecordObjects(objectsToUndo: UnityEngine.Object[], name: string): void;
    // properties
    // fields
  }
}
