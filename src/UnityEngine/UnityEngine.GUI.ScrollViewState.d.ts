declare namespace UnityEngine.GUI {
  class ScrollViewState {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    position: UnityEngine.Rect;
    visibleRect: UnityEngine.Rect;
    viewRect: UnityEngine.Rect;
    scrollPosition: UnityEngine.Vector2;
    apply: boolean;
    hasScrollTo: boolean;
  }
}
