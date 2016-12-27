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
    raycast3D: ((UnityEngine.Ray, any, number, number) => boolean);
    raycast3DAll: ((UnityEngine.Ray, number, number) => UnityEngine.RaycastHit[]);
    raycast2D: ((UnityEngine.Vector2, UnityEngine.Vector2, number, number) => UnityEngine.RaycastHit2D);
    getRayIntersectionAll: ((UnityEngine.Ray, number, number) => UnityEngine.RaycastHit2D[]);
  }
}
