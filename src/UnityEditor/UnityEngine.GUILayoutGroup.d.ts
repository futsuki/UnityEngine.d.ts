declare namespace UnityEngine {
  class GUILayoutGroup extends UnityEngine.GUILayoutEntry {
    // constructors
    constructor();
    constructor(_style: any, options: any[]);
    // methods
    ApplyOptions(options: any[]): void;
    ResetCursor(): void;
    PeekNext(): any;
    GetNext(): UnityEngine.GUILayoutEntry;
    GetLast(): any;
    Add(e: UnityEngine.GUILayoutEntry): void;
    CalcWidth(): void;
    SetHorizontal(x: number, width: number): void;
    CalcHeight(): void;
    SetVertical(y: number, height: number): void;
    ToString(): string;
    // properties
    readonly margin: any;
    // fields
    entries: UnityEngine.GUILayoutEntry[];
    isVertical: boolean;
    resetCoords: boolean;
    spacing: number;
    sameSize: boolean;
    isWindow: boolean;
    windowID: number;
  }
}
