declare namespace UnityEngine.EventSystems {
  class AxisEventData extends UnityEngine.EventSystems.BaseEventData {
    // constructors
    constructor(eventSystem: UnityEngine.EventSystems.EventSystem);
    // methods
    // properties
    moveVector: UnityEngine.Vector2;
    moveDir: UnityEngine.EventSystems.MoveDirection;
    // fields
  }
}
