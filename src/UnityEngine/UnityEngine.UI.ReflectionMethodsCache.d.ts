declare namespace UnityEngine.UI {
  class ReflectionMethodsCache {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly Singleton: UnityEngine.UI.ReflectionMethodsCache;
    // fields
    raycast3D: UnityEngine.UI.ReflectionMethodsCache.Raycast3DCallback;
    raycast3DAll: UnityEngine.UI.ReflectionMethodsCache.RaycastAllCallback;
    raycast2D: UnityEngine.UI.ReflectionMethodsCache.Raycast2DCallback;
    getRayIntersectionAll: UnityEngine.UI.ReflectionMethodsCache.GetRayIntersectionAllCallback;
  }
}
