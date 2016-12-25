declare namespace UnityEngine {
  class LocationInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly latitude: number;
    readonly longitude: number;
    readonly altitude: number;
    readonly horizontalAccuracy: number;
    readonly verticalAccuracy: number;
    readonly timestamp: number;
    // fields
  }
}
