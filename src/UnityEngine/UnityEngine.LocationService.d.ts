declare namespace UnityEngine {
  class LocationService extends System.Object {
    // constructors
    constructor();
    // methods
    Start(desiredAccuracyInMeters: number, updateDistanceInMeters: number): void;
    Start(desiredAccuracyInMeters: number): void;
    Start(): void;
    Stop(): void;
    // properties
    readonly isEnabledByUser: boolean;
    readonly status: UnityEngine.LocationServiceStatus;
    readonly lastData: UnityEngine.LocationInfo;
    // fields
  }
}
