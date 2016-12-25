declare namespace UnityEngine {
  class LocationService {
    // constructors
    constructor();
    // methods
    Start(desiredAccuracyInMeters: number, updateDistanceInMeters: number): any;
    Start(desiredAccuracyInMeters: number): any;
    Start(): any;
    Stop(): any;
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
