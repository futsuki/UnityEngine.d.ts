declare namespace UnityEngine {
  class Compass {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly magneticHeading: number;
    readonly trueHeading: number;
    readonly headingAccuracy: number;
    readonly rawVector: UnityEngine.Vector3;
    readonly timestamp: number;
    enabled: boolean;
    // fields
  }
}
