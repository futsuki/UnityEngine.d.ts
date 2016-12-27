declare namespace UnityEngine.EventSystems {
  class BaseRaycaster extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    ToString(): string;
    // properties
    readonly eventCamera: UnityEngine.Camera;
    readonly priority: number;
    readonly sortOrderPriority: number;
    readonly renderOrderPriority: number;
    // fields
  }
}
