declare namespace UnityEngine {
  class Bounds {
    // constructors
    private constructor();
    // methods
    Contains(point: UnityEngine.Vector3): boolean;
    SqrDistance(point: UnityEngine.Vector3): number;
    IntersectRay(ray: UnityEngine.Ray): boolean;
    IntersectRay(ray: UnityEngine.Ray, distance: any): boolean;
    ClosestPoint(point: UnityEngine.Vector3): UnityEngine.Vector3;
    GetHashCode(): number;
    Equals(other: any): boolean;
    SetMinMax(min: UnityEngine.Vector3, max: UnityEngine.Vector3): any;
    Encapsulate(point: UnityEngine.Vector3): any;
    Encapsulate(bounds: UnityEngine.Bounds): any;
    Expand(amount: number): any;
    Expand(amount: UnityEngine.Vector3): any;
    Intersects(bounds: UnityEngine.Bounds): boolean;
    ToString(): string;
    ToString(format: string): string;
    GetType(): any;
    // properties
    center: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    extents: UnityEngine.Vector3;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    // fields
  }
}
