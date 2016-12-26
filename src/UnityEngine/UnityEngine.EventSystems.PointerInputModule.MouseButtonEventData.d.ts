declare namespace UnityEngine.EventSystems.PointerInputModule {
  class MouseButtonEventData {
    // constructors
    constructor();
    // methods
    PressedThisFrame(): boolean;
    ReleasedThisFrame(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    buttonState: UnityEngine.EventSystems.PointerEventData.FramePressState;
    buttonData: UnityEngine.EventSystems.PointerEventData;
  }
}
