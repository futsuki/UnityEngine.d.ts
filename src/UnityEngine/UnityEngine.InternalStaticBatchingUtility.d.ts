declare namespace UnityEngine {
  class InternalStaticBatchingUtility {
    // constructors
    constructor();
    // methods
    static CombineRoot(staticBatchRoot: UnityEngine.GameObject): any;
    static Combine(staticBatchRoot: UnityEngine.GameObject, combineOnlyStatic: boolean, isEditorPostprocessScene: boolean): any;
    static CombineGameObjects(gos: UnityEngine.GameObject[], staticBatchRoot: UnityEngine.GameObject, isEditorPostprocessScene: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
