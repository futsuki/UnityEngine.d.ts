declare namespace UnityEngine {
  class GUIScrollGroup {
    // constructors
    constructor();
    // methods
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): void;
    ResetCursor(): void;
    PeekNext(): UnityEngine.Rect;
    GetNext(): UnityEngine.GUILayoutEntry;
    GetLast(): UnityEngine.Rect;
    Add(e: UnityEngine.GUILayoutEntry): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly margin: UnityEngine.RectOffset;
    style: UnityEngine.GUIStyle;
    // fields
    calcMinWidth: number;
    calcMaxWidth: number;
    calcMinHeight: number;
    calcMaxHeight: number;
    clientWidth: number;
    clientHeight: number;
    allowHorizontalScroll: boolean;
    allowVerticalScroll: boolean;
    needsHorizontalScrollbar: boolean;
    needsVerticalScrollbar: boolean;
    horizontalScrollbar: UnityEngine.GUIStyle;
    verticalScrollbar: UnityEngine.GUIStyle;
    entries: any;
    isVertical: boolean;
    resetCoords: boolean;
    spacing: number;
    sameSize: boolean;
    isWindow: boolean;
    windowID: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    rect: UnityEngine.Rect;
    stretchWidth: number;
    stretchHeight: number;
  }
}
