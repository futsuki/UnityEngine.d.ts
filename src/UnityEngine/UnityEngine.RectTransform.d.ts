declare namespace UnityEngine {
  class RectTransform extends UnityEngine.Transform {
    // constructors
    constructor();
    // methods
    GetLocalCorners(fourCornersArray: UnityEngine.Vector3[]): void;
    GetWorldCorners(fourCornersArray: UnityEngine.Vector3[]): void;
    SetInsetAndSizeFromParentEdge(edge: UnityEngine.RectTransform.Edge, inset: number, size: number): void;
    SetSizeWithCurrentAnchors(axis: UnityEngine.RectTransform.Axis, size: number): void;
    // properties
    readonly rect: UnityEngine.Rect;
    anchorMin: UnityEngine.Vector2;
    anchorMax: UnityEngine.Vector2;
    anchoredPosition3D: UnityEngine.Vector3;
    anchoredPosition: UnityEngine.Vector2;
    sizeDelta: UnityEngine.Vector2;
    pivot: UnityEngine.Vector2;
    offsetMin: UnityEngine.Vector2;
    offsetMax: UnityEngine.Vector2;
    // fields
  }
}
