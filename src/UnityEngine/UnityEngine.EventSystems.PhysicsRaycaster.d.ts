declare namespace UnityEngine.EventSystems {
  class PhysicsRaycaster extends UnityEngine.EventSystems.BaseRaycaster {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    // properties
    readonly eventCamera: UnityEngine.Camera;
    readonly depth: number;
    readonly finalEventMask: number;
    eventMask: UnityEngine.LayerMask;
    // fields
  }
}
