declare namespace UnityEditor {
  class EditorCache extends System.Object {
    // constructors
    constructor();
    constructor(requirements: UnityEditor.EditorFeatures);
    // methods
    CleanupUntouchedEditors(): void;
    CleanupAllEditors(): void;
    Dispose(): void;
    // properties
    get_Item(o: UnityEngine.Object): UnityEditor.EditorWrapper;
    // fields
  }
}
