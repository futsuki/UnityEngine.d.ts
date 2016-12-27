declare namespace UnityEngine {
  class RectTransformUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static RectangleContainsScreenPoint(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2): boolean;
    static RectangleContainsScreenPoint(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera): boolean;
    static ScreenPointToWorldPointInRectangle(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera, worldPoint: any): boolean;
    static ScreenPointToLocalPointInRectangle(rect: UnityEngine.RectTransform, screenPoint: UnityEngine.Vector2, cam: UnityEngine.Camera, localPoint: any): boolean;
    static ScreenPointToRay(cam: UnityEngine.Camera, screenPos: UnityEngine.Vector2): UnityEngine.Ray;
    static WorldToScreenPoint(cam: UnityEngine.Camera, worldPoint: UnityEngine.Vector3): UnityEngine.Vector2;
    static CalculateRelativeRectTransformBounds(root: UnityEngine.Transform, child: UnityEngine.Transform): UnityEngine.Bounds;
    static CalculateRelativeRectTransformBounds(trans: UnityEngine.Transform): UnityEngine.Bounds;
    static FlipLayoutOnAxis(rect: UnityEngine.RectTransform, axis: number, keepPositioning: boolean, recursive: boolean): void;
    static FlipLayoutAxes(rect: UnityEngine.RectTransform, keepPositioning: boolean, recursive: boolean): void;
    static PixelAdjustPoint(point: UnityEngine.Vector2, elementTransform: UnityEngine.Transform, canvas: UnityEngine.Canvas): UnityEngine.Vector2;
    static PixelAdjustRect(rectTransform: UnityEngine.RectTransform, canvas: UnityEngine.Canvas): UnityEngine.Rect;
    // properties
    // fields
  }
}
