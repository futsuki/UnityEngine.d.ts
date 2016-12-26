declare namespace UnityEngine {
  class iPhoneSettings {
    // constructors
    constructor();
    // methods
    static StartLocationServiceUpdates(desiredAccuracyInMeters: number, updateDistanceInMeters: number): void;
    static StartLocationServiceUpdates(desiredAccuracyInMeters: number): void;
    static StartLocationServiceUpdates(): void;
    static StopLocationServiceUpdates(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly verticalOrientation: boolean;
    static readonly screenCanDarken: boolean;
    static readonly locationServiceStatus: UnityEngine.LocationServiceStatus;
    static readonly locationServiceEnabledByUser: boolean;
    static readonly screenOrientation: UnityEngine.iPhoneScreenOrientation;
    static readonly uniqueIdentifier: string;
    static readonly name: string;
    static readonly model: string;
    static readonly systemName: string;
    static readonly internetReachability: UnityEngine.iPhoneNetworkReachability;
    static readonly systemVersion: string;
    static readonly generation: UnityEngine.iPhoneGeneration;
    // fields
  }
}
