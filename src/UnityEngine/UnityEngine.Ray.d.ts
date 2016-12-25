declare namespace UnityEngine {
  class Ray {
    // constructors
    private constructor();
    // methods
    GetPoint(distance: number): UnityEngine.Vector3;
    ToString(): string;
    ToString(format: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    origin: UnityEngine.Vector3;
    direction: UnityEngine.Vector3;
    // fields
  }
}
