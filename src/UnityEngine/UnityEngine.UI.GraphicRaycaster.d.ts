declare namespace UnityEngine.UI {
  class GraphicRaycaster extends UnityEngine.EventSystems.BaseRaycaster {
    // constructors
    protected constructor();
    // methods
    Raycast(eventData: UnityEngine.EventSystems.PointerEventData, resultAppendList: UnityEngine.EventSystems.RaycastResult[]): void;
    // properties
    readonly sortOrderPriority: number;
    readonly renderOrderPriority: number;
    ignoreReversedGraphics: boolean;
    blockingObjects: UnityEngine.UI.GraphicRaycaster.BlockingObjects;
    readonly eventCamera: UnityEngine.Camera;
    // fields
  }
}
