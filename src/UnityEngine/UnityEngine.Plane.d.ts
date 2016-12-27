declare namespace UnityEngine {
  class Plane extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetNormalAndPosition(inNormal: UnityEngine.Vector3, inPoint: UnityEngine.Vector3): void;
    Set3Points(a: UnityEngine.Vector3, b: UnityEngine.Vector3, c: UnityEngine.Vector3): void;
    GetDistanceToPoint(inPt: UnityEngine.Vector3): number;
    GetSide(inPt: UnityEngine.Vector3): boolean;
    SameSide(inPt0: UnityEngine.Vector3, inPt1: UnityEngine.Vector3): boolean;
    Raycast(ray: UnityEngine.Ray, enter: any): boolean;
    // properties
    normal: UnityEngine.Vector3;
    distance: number;
    // fields
  }
}
