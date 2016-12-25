declare namespace UnityEngine {
  class LocationServiceStatus {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Stopped: UnityEngine.LocationServiceStatus;
    static Initializing: UnityEngine.LocationServiceStatus;
    static Running: UnityEngine.LocationServiceStatus;
    static Failed: UnityEngine.LocationServiceStatus;
  }
}
