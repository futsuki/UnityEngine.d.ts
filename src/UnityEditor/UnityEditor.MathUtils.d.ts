declare namespace UnityEditor {
  class MathUtils {
    // constructors
    constructor();
    // methods
    static GetQuatLength(q: any): number;
    static GetQuatConjugate(q: any): any;
    static OrthogonalizeMatrix(m: any): any;
    static QuaternionNormalize(q: any): void;
    static QuaternionFromMatrix(m: any): any;
    static GetQuatLog(q: any): any;
    static GetQuatExp(q: any): any;
    static GetQuatSquad(t: number, q0: any, q1: any, a0: any, a1: any): any;
    static GetSquadIntermediate(q0: any, q1: any, q2: any): any;
    static Ease(t: number, k1: number, k2: number): number;
    static Slerp(p: any, q: any, t: number): any;
    static IntersectRayTriangle(ray: any, v0: any, v1: any, v2: any, bidirectional: boolean): any;
    static ClosestPtSegmentRay(p1: any, q1: any, ray: any, squaredDist: any, s: any, closestRay: any): any;
    static IntersectRaySphere(ray: any, sphereOrigin: any, sphereRadius: number, t: any, q: any): boolean;
    static ClosestPtRaySphere(ray: any, sphereOrigin: any, sphereRadius: number, t: any, q: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
