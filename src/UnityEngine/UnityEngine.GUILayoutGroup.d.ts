declare namespace UnityEngine {
  class GUILayoutGroup extends UnityEngine.GUILayoutEntry {
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
    // properties
    readonly margin: UnityEngine.RectOffset;
    // fields
    entries: UnityEngine.GUILayoutEntry[];
    isVertical: boolean;
    resetCoords: boolean;
    spacing: number;
    sameSize: boolean;
    isWindow: boolean;
    windowID: number;
  }
}
