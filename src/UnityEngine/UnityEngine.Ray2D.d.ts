declare namespace UnityEngine {
  class Ray2D extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector2;
    ToString(): string;
    ToString(format: string): string;
    // properties
    origin: UnityEngine.Vector2;
    direction: UnityEngine.Vector2;
    // fields
  }
}
