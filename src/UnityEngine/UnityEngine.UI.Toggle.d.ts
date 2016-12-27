declare namespace UnityEngine.UI {
  class Toggle extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData): void;
    // properties
    group: UnityEngine.UI.ToggleGroup;
    isOn: boolean;
    // fields
    toggleTransition: UnityEngine.UI.Toggle.ToggleTransition;
    graphic: UnityEngine.UI.Graphic;
    onValueChanged: UnityEngine.UI.Toggle.ToggleEvent;
  }
}
