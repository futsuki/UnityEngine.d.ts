declare namespace UnityEngine.UI {
  class Button extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    onClick: UnityEngine.UI.Button.ButtonClickedEvent;
    // fields
  }
}
