declare namespace UnityEngine {
  class Input extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAxis(axisName: string): number;
    static GetAxisRaw(axisName: string): number;
    static GetButton(buttonName: string): boolean;
    static GetButtonDown(buttonName: string): boolean;
    static GetButtonUp(buttonName: string): boolean;
    static GetKey(name: string): boolean;
    static GetKey(key: UnityEngine.KeyCode): boolean;
    static GetKeyDown(name: string): boolean;
    static GetKeyDown(key: UnityEngine.KeyCode): boolean;
    static GetKeyUp(name: string): boolean;
    static GetKeyUp(key: UnityEngine.KeyCode): boolean;
    static GetJoystickNames(): string[];
    static IsJoystickPreconfigured(joystickName: string): boolean;
    static GetMouseButton(button: number): boolean;
    static GetMouseButtonDown(button: number): boolean;
    static GetMouseButtonUp(button: number): boolean;
    static ResetInputAxes(): void;
    static GetAccelerationEvent(index: number): UnityEngine.AccelerationEvent;
    static GetTouch(index: number): UnityEngine.Touch;
    // properties
    static compensateSensors: boolean;
    static readonly isGyroAvailable: boolean;
    static readonly gyro: UnityEngine.Gyroscope;
    static readonly mousePosition: UnityEngine.Vector3;
    static readonly mouseScrollDelta: UnityEngine.Vector2;
    static readonly mousePresent: boolean;
    static simulateMouseWithTouches: boolean;
    static readonly anyKey: boolean;
    static readonly anyKeyDown: boolean;
    static readonly inputString: string;
    static readonly acceleration: UnityEngine.Vector3;
    static readonly accelerationEvents: UnityEngine.AccelerationEvent[];
    static readonly accelerationEventCount: number;
    static readonly touches: UnityEngine.Touch[];
    static readonly touchCount: number;
    static eatKeyPressOnTextFieldFocus: boolean;
    static readonly touchPressureSupported: boolean;
    static readonly stylusTouchSupported: boolean;
    static readonly touchSupported: boolean;
    static multiTouchEnabled: boolean;
    static readonly location: UnityEngine.LocationService;
    static readonly compass: UnityEngine.Compass;
    static readonly deviceOrientation: UnityEngine.DeviceOrientation;
    static imeCompositionMode: UnityEngine.IMECompositionMode;
    static readonly compositionString: string;
    static readonly imeIsSelected: boolean;
    static compositionCursorPos: UnityEngine.Vector2;
    static backButtonLeavesApp: boolean;
    // fields
  }
}
