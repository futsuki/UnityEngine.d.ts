declare namespace UnityEngine {
  class GUILayoutEntry {
    // constructors
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: UnityEngine.GUIStyle);
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: UnityEngine.GUIStyle, options: UnityEngine.GUILayoutOption[]);
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
