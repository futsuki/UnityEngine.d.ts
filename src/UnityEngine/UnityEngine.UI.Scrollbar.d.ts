declare namespace UnityEngine.UI {
  class Scrollbar extends UnityEngine.UI.Selectable {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnMove(eventData: UnityEngine.EventSystems.AxisEventData): void;
    FindSelectableOnLeft(): UnityEngine.UI.Selectable;
    FindSelectableOnRight(): UnityEngine.UI.Selectable;
    FindSelectableOnUp(): UnityEngine.UI.Selectable;
    FindSelectableOnDown(): UnityEngine.UI.Selectable;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    SetDirection(direction: UnityEngine.UI.Scrollbar.Direction, includeRectLayouts: boolean): void;
    // properties
    handleRect: UnityEngine.RectTransform;
    direction: UnityEngine.UI.Scrollbar.Direction;
    value: number;
    size: number;
    numberOfSteps: number;
    onValueChanged: UnityEngine.UI.Scrollbar.ScrollEvent;
    // fields
  }
}
