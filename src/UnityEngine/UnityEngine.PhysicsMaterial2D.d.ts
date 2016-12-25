declare namespace UnityEngine {
  class PhysicsMaterial2D {
    // constructors
    constructor();
    constructor(name: string);
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    bounciness: number;
    friction: number;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
