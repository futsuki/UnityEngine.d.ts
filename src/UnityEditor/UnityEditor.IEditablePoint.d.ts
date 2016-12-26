declare namespace UnityEditor {
  class IEditablePoint {
    // constructors
    private constructor();
    // methods
    GetPosition(idx: number): any;
    SetPosition(idx: number, position: any): void;
    GetDefaultColor(): any;
    GetSelectedColor(): any;
    GetPointScale(): number;
    GetPositions(): any;
    GetUnselectedPositions(): any[];
    GetSelectedPositions(): any[];
    // properties
    readonly Count: number;
    // fields
  }
}
