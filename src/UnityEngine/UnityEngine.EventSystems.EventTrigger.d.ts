declare namespace UnityEngine.EventSystems {
  class EventTrigger extends UnityEngine.MonoBehaviour {
    // constructors
    protected constructor();
    // methods
    OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrop(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSelect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnScroll(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    OnCancel(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    triggers: UnityEngine.EventSystems.EventTrigger.Entry[];
    // fields
    delegates: UnityEngine.EventSystems.EventTrigger.Entry[];
  }
}
