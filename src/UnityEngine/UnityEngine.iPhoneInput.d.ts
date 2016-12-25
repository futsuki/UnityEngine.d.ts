declare namespace UnityEngine {
  class iPhoneInput {
    // constructors
    constructor();
    // methods
    static GetTouch(index: number): UnityEngine.iPhoneTouch;
    static GetAccelerationEvent(index: number): UnityEngine.iPhoneAccelerationEvent;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly orientation: UnityEngine.iPhoneOrientation;
    static readonly lastLocation: UnityEngine.LocationInfo;
    static readonly accelerationEvents: UnityEngine.iPhoneAccelerationEvent[];
    static readonly touches: UnityEngine.iPhoneTouch[];
    static readonly touchCount: number;
    static multiTouchEnabled: boolean;
    static readonly accelerationEventCount: number;
    static readonly acceleration: UnityEngine.Vector3;
    // fields
  }
}
