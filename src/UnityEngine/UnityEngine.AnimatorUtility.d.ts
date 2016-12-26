declare namespace UnityEngine {
  class AnimatorUtility {
    // constructors
    constructor();
    // methods
    static OptimizeTransformHierarchy(go: UnityEngine.GameObject, exposedTransforms: string[]): void;
    static DeoptimizeTransformHierarchy(go: UnityEngine.GameObject): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
