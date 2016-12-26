declare namespace UnityEngine.GUI {
  class ScrollViewScope {
    // constructors
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    constructor(position: UnityEngine.Rect, scrollPosition: UnityEngine.Vector2, viewRect: UnityEngine.Rect, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: UnityEngine.GUIStyle, verticalScrollbar: UnityEngine.GUIStyle);
    // methods
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly scrollPosition: UnityEngine.Vector2;
    handleScrollWheel: boolean;
    // fields
  }
}
