declare namespace UnityEngine {
  class GUIGridSizer {
    // constructors
    private constructor();
    // methods
    static GetRect(contents: UnityEngine.GUIContent[], xCount: number, style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]): UnityEngine.Rect;
    CalcWidth(): void;
    CalcHeight(): void;
    SetHorizontal(x: number, width: number): void;
    SetVertical(y: number, height: number): void;
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    style: UnityEngine.GUIStyle;
    readonly margin: UnityEngine.RectOffset;
    // fields
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    rect: UnityEngine.Rect;
    stretchWidth: number;
    stretchHeight: number;
  }
}
