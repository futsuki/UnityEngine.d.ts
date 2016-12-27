declare namespace UnityEngine {
  class GUIUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static GetControlID(focus: any): number;
    static GetControlID(contents: any, focus: any): number;
    static GetControlID(focus: any, position: any): number;
    static GetControlID(hint: number, focus: any, position: any): number;
    static GetControlID(contents: any, focus: any, position: any): number;
    static GetControlID(hint: number, focus: any): number;
    static GetStateObject(t: any, controlID: number): any;
    static QueryStateObject(t: any, controlID: number): any;
    static ExitGUI(): void;
    static GUIToScreenPoint(guiPoint: any): any;
    static ScreenToGUIPoint(screenPoint: any): any;
    static ScreenToGUIRect(screenRect: any): any;
    static RotateAroundPivot(angle: number, pivotPoint: any): void;
    static ScaleAroundPivot(scale: any, pivotPoint: any): void;
    // properties
    static hotControl: number;
    static keyboardControl: number;
    static systemCopyBuffer: string;
    static readonly hasModalWindow: boolean;
    // fields
  }
}
