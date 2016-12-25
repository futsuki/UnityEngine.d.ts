declare namespace UnityEngine {
  class JointLimits {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    min: number;
    max: number;
    bounciness: number;
    bounceMinVelocity: number;
    contactDistance: number;
    // fields
    minBounce: number;
    maxBounce: number;
  }
}
