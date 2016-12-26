declare namespace UnityEngine {
  class GUIWordWrapSizer {
    // constructors
    constructor(style: UnityEngine.GUIStyle, content: UnityEngine.GUIContent, options: UnityEngine.GUILayoutOption[]);
    // methods
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
