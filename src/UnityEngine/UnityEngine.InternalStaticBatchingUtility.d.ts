declare namespace UnityEngine {
  class InternalStaticBatchingUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static CombineRoot(staticBatchRoot: UnityEngine.GameObject): void;
    static Combine(staticBatchRoot: UnityEngine.GameObject, combineOnlyStatic: boolean, isEditorPostprocessScene: boolean): void;
    static CombineGameObjects(gos: UnityEngine.GameObject[], staticBatchRoot: UnityEngine.GameObject, isEditorPostprocessScene: boolean): void;
    // properties
    // fields
  }
}
