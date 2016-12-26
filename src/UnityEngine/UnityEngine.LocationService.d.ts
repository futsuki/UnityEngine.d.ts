declare namespace UnityEngine {
  class LocationService {
    // constructors
    constructor();
    // methods
    Start(desiredAccuracyInMeters: number, updateDistanceInMeters: number): void;
    Start(desiredAccuracyInMeters: number): void;
    Start(): void;
    Stop(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isEnabledByUser: boolean;
    readonly status: UnityEngine.LocationServiceStatus;
    readonly lastData: UnityEngine.LocationInfo;
    // fields
  }
}
