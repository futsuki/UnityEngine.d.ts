declare namespace UnityEditor {
  class GUILayoutFadeGroup {
    // constructors
    constructor();
    // methods
    CalcHeight(): void;
    ApplyOptions(options: any[]): void;
    ResetCursor(): void;
    PeekNext(): any;
    GetNext(): any;
    GetLast(): any;
    Add(e: any): void;
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    SetVertical(y: number, height: number): void;
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
