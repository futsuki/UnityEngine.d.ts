declare namespace UnityEditor {
  class GUILayoutFadeGroup {
    // constructors
    constructor();
    // methods
    CalcHeight(): any;
    ApplyOptions(options: any[]): any;
    ResetCursor(): any;
    PeekNext(): any;
    GetNext(): any;
    GetLast(): any;
    Add(e: any): any;
    CalcWidth(): any;
    SetHorizontal(x: number, width: number): any;
    SetVertical(y: number, height: number): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly margin: any;
    style: any;
    // fields
    fadeValue: number;
    wasGUIEnabled: boolean;
    guiColor: any;
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
    rect: any;
    stretchWidth: number;
    stretchHeight: number;
  }
}
