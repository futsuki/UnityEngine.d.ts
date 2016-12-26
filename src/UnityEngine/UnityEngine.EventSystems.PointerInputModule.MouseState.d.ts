declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseState {
    // constructors
    constructor();
    // methods
    AnyPressesThisFrame(): boolean;
    AnyReleasesThisFrame(): boolean;
    GetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton): UnityEngine.EventSystems.PointerInputModule.ButtonState;
    SetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton, stateForMouseButton: UnityEngine.EventSystems.PointerEventData.FramePressState, data: UnityEngine.EventSystems.PointerEventData): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
