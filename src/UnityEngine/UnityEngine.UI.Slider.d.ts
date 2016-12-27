declare namespace UnityEngine.UI {
  class Slider extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    SetDirection(direction: UnityEngine.UI.Slider.Direction, includeRectLayouts: boolean): void;
    // properties
    fillRect: UnityEngine.RectTransform;
    handleRect: UnityEngine.RectTransform;
    direction: UnityEngine.UI.Slider.Direction;
    minValue: number;
    maxValue: number;
    wholeNumbers: boolean;
    value: number;
    normalizedValue: number;
    onValueChanged: UnityEngine.UI.Slider.SliderEvent;
    // fields
  }
}
