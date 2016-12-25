declare namespace UnityEngine {
  class GUIUtility {
    // constructors
    constructor();
    // methods
    static GetControlID(focus: UnityEngine.FocusType): number;
    static GetControlID(contents: UnityEngine.GUIContent, focus: UnityEngine.FocusType): number;
    static GetControlID(focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetControlID(hint: number, focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetControlID(contents: UnityEngine.GUIContent, focus: UnityEngine.FocusType, position: UnityEngine.Rect): number;
    static GetStateObject(t: any, controlID: number): any;
    static QueryStateObject(t: any, controlID: number): any;
    static ExitGUI(): any;
    static GUIToScreenPoint(guiPoint: UnityEngine.Vector2): UnityEngine.Vector2;
    static ScreenToGUIPoint(screenPoint: UnityEngine.Vector2): UnityEngine.Vector2;
    static ScreenToGUIRect(screenRect: UnityEngine.Rect): UnityEngine.Rect;
    static RotateAroundPivot(angle: number, pivotPoint: UnityEngine.Vector2): any;
    static ScaleAroundPivot(scale: UnityEngine.Vector2, pivotPoint: UnityEngine.Vector2): any;
    static GetControlID(hint: number, focus: UnityEngine.FocusType): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static hotControl: number;
    static keyboardControl: number;
    static systemCopyBuffer: string;
    static readonly hasModalWindow: boolean;
    // fields
  }
}
