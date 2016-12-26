declare namespace UnityEngine {
  class InternalStaticBatchingUtility {
    // constructors
    constructor();
    // methods
    static CombineRoot(staticBatchRoot: UnityEngine.GameObject): void;
    static Combine(staticBatchRoot: UnityEngine.GameObject, combineOnlyStatic: boolean, isEditorPostprocessScene: boolean): void;
    static CombineGameObjects(gos: UnityEngine.GameObject[], staticBatchRoot: UnityEngine.GameObject, isEditorPostprocessScene: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
