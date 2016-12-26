declare namespace UnityEditor.GUISlideGroup {
  class SlideGroupInternal {
    // constructors
    constructor();
    // methods
    SetID(owner: UnityEditor.GUISlideGroup, id: number): void;
    SetHorizontal(x: number, width: number): void;
    SetVertical(y: number, height: number): void;
    ApplyOptions(options: any[]): void;
    ResetCursor(): void;
    PeekNext(): any;
    GetNext(): any;
    GetLast(): any;
    Add(e: any): void;
    CalcWidth(): void;
    CalcHeight(): void;
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
