declare namespace UnityEngine.UI {
  class ReflectionMethodsCache extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    static readonly Singleton: UnityEngine.UI.ReflectionMethodsCache;
    // fields
    raycast3D: ((r: UnityEngine.Ray, hit: any, f: number, i: number) => boolean);
    raycast3DAll: ((r: UnityEngine.Ray, f: number, i: number) => UnityEngine.RaycastHit[]);
    raycast2D: ((p1: UnityEngine.Vector2, p2: UnityEngine.Vector2, f: number, i: number) => UnityEngine.RaycastHit2D);
    getRayIntersectionAll: ((r: UnityEngine.Ray, f: number, i: number) => UnityEngine.RaycastHit2D[]);
  }
}
