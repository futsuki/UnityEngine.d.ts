declare namespace UnityEditor {
  class UndoSnapshot extends System.Object {
    // constructors
    constructor(objectsToUndo: UnityEngine.Object[]);
    // methods
    Restore(): void;
    Dispose(): void;
    // properties
    // fields
  }
}
