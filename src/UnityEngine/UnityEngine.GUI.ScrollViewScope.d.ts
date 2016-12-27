declare namespace UnityEngine.GUI {
  class ScrollViewScope extends UnityEngine.GUI.Scope {
    // constructors
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    // methods
    // properties
    readonly scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    // fields
  }
}
