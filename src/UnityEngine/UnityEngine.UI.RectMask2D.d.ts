declare namespace UnityEngine.UI {
  class RectMask2D extends UnityEngine.EventSystems.UIBehaviour {
    // constructors
    protected constructor();
    // methods
    IsRaycastLocationValid(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    PerformClipping(): void;
    AddClippable(clippable: UnityEngine.UI.IClippable): void;
    RemoveClippable(clippable: UnityEngine.UI.IClippable): void;
    // properties
    readonly canvasRect: UnityEngine.Rect;
    readonly rectTransform: UnityEngine.RectTransform;
    // fields
  }
}
