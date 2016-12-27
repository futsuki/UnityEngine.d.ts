declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseButtonEventData extends System.Object {
    // constructors
    constructor();
    // methods
    PressedThisFrame(): boolean;
    ReleasedThisFrame(): boolean;
    // properties
    // fields
    buttonState: UnityEngine.EventSystems.PointerEventData.FramePressState;
    buttonData: UnityEngine.EventSystems.PointerEventData;
  }
}
