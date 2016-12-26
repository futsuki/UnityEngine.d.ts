declare namespace UnityEngine {
  class GUILayoutGroup {
    // constructors
    constructor();
    constructor(_style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
    // methods
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): void;
    ResetCursor(): void;
    PeekNext(): UnityEngine.Rect;
    GetNext(): UnityEngine.GUILayoutEntry;
    GetLast(): UnityEngine.Rect;
    Add(e: UnityEngine.GUILayoutEntry): void;
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly margin: UnityEngine.RectOffset;
    style: UnityEngine.GUIStyle;
    // fields
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
