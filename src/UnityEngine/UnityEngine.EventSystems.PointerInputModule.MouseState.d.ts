declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseState extends System.Object {
    // constructors
    constructor();
    // methods
    AnyPressesThisFrame(): boolean;
    AnyReleasesThisFrame(): boolean;
    GetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton): UnityEngine.EventSystems.PointerInputModule.ButtonState;
    SetButtonState(button: UnityEngine.EventSystems.PointerEventData.InputButton, stateForMouseButton: UnityEngine.EventSystems.PointerEventData.FramePressState, data: UnityEngine.EventSystems.PointerEventData): void;
    // properties
    // fields
  }
}
