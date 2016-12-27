declare namespace UnityEngine {
  class GUIScrollGroup extends UnityEngine.GUILayoutGroup {
    // constructors
    constructor();
    // methods
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    // properties
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
  }
}
