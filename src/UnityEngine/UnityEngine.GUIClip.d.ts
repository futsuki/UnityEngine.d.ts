declare namespace UnityEngine {
  class GUIClip {
    // constructors
    constructor();
    // methods
    static Unclip(pos: UnityEngine.Vector2): UnityEngine.Vector2;
    static Unclip(rect: UnityEngine.Rect): UnityEngine.Rect;
    static Clip(absolutePos: UnityEngine.Vector2): UnityEngine.Vector2;
    static Clip(absoluteRect: UnityEngine.Rect): UnityEngine.Rect;
    static GetAbsoluteMousePosition(): UnityEngine.Vector2;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly enabled: boolean;
    static readonly topmostRect: UnityEngine.Rect;
    static readonly visibleRect: UnityEngine.Rect;
    // fields
  }
}
