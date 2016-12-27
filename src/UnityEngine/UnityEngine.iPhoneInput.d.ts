declare namespace UnityEngine {
  class iPhoneInput extends System.Object {
    // constructors
    constructor();
    // methods
    static GetTouch(index: number): UnityEngine.iPhoneTouch;
    static GetAccelerationEvent(index: number): UnityEngine.iPhoneAccelerationEvent;
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
