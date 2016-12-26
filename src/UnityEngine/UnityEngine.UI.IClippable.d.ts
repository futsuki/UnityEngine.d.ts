declare namespace UnityEngine.UI {
  class IClippable {
    // constructors
    private constructor();
    // methods
    RecalculateClipping(): void;
    Cull(clipRect: UnityEngine.Rect, validRect: boolean): void;
    SetClipRect(value: UnityEngine.Rect, validRect: boolean): void;
    // properties
    readonly gameObject: UnityEngine.GameObject;
    readonly rectTransform: UnityEngine.RectTransform;
    // fields
  }
}
