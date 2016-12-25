declare namespace UnityEditor.GUISlideGroup {
  class SlideGroupInternal {
    // constructors
    constructor();
    // methods
    SetID(owner: UnityEditor.GUISlideGroup, id: number): any;
    SetHorizontal(x: number, width: number): any;
    SetVertical(y: number, height: number): any;
    ApplyOptions(options: any[]): any;
    ResetCursor(): any;
    PeekNext(): any;
    GetNext(): any;
    GetLast(): any;
    Add(e: any): any;
    CalcWidth(): any;
    CalcHeight(): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly margin: any;
    style: any;
    // fields
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
