declare namespace UnityEngine {
  class Ray extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector3;
    ToString(): string;
    ToString(format: string): string;
    // properties
    origin: UnityEngine.Vector3;
    direction: UnityEngine.Vector3;
    // fields
  }
}
