declare namespace UnityEngine.UI {
  class ScrollRect extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    Rebuild(executing: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    IsActive(): boolean;
    StopMovement(): void;
    OnScroll(data: UnityEngine.EventSystems.PointerEventData): void;
    OnInitializePotentialDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    OnDrag(eventData: UnityEngine.EventSystems.PointerEventData): void;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    SetLayoutHorizontal(): void;
    SetLayoutVertical(): void;
    // properties
    content: UnityEngine.RectTransform;
    horizontal: boolean;
    vertical: boolean;
    movementType: UnityEngine.UI.ScrollRect.MovementType;
    elasticity: number;
    inertia: boolean;
    decelerationRate: number;
    scrollSensitivity: number;
    viewport: UnityEngine.RectTransform;
    horizontalScrollbar: UnityEngine.UI.Scrollbar;
    verticalScrollbar: UnityEngine.UI.Scrollbar;
    horizontalScrollbarVisibility: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    verticalScrollbarVisibility: UnityEngine.UI.ScrollRect.ScrollbarVisibility;
    horizontalScrollbarSpacing: number;
    verticalScrollbarSpacing: number;
    onValueChanged: UnityEngine.UI.ScrollRect.ScrollRectEvent;
    velocity: UnityEngine.Vector2;
    normalizedPosition: UnityEngine.Vector2;
    horizontalNormalizedPosition: number;
    verticalNormalizedPosition: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    // fields
  }
}
