declare namespace UnityEngine {
  class Ray2D {
    // constructors
    private constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector2;
    ToString(): string;
    ToString(format: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    origin: UnityEngine.Vector2;
    direction: UnityEngine.Vector2;
    // fields
  }
}
