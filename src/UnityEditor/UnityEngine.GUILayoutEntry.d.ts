declare namespace UnityEngine {
  class GUILayoutEntry extends System.Object {
    // constructors
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: any);
    constructor(_minWidth: number, _maxWidth: number, _minHeight: number, _maxHeight: number, _style: any, options: any[]);
    // methods
    CalcWidth(): void;
    CalcHeight(): void;
    SetHorizontal(x: number, width: number): void;
    SetVertical(y: number, height: number): void;
    ApplyOptions(options: any[]): void;
    ToString(): string;
    // properties
    style: any;
    readonly margin: any;
    // fields
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    rect: any;
    stretchWidth: number;
    stretchHeight: number;
  }
}
