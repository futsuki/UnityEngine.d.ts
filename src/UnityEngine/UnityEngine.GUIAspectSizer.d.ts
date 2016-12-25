declare namespace UnityEngine {
  class GUIAspectSizer {
    // constructors
    constructor(aspect: number, options: UnityEngine.GUILayoutOption[]);
    // methods
    CalcHeight(): any;
    CalcWidth(): any;
    SetHorizontal(x: number, width: number): any;
    SetVertical(y: number, height: number): any;
    ApplyOptions(options: UnityEngine.GUILayoutOption[]): any;
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
