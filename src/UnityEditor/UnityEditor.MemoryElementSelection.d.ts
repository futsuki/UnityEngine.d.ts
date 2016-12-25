declare namespace UnityEditor {
  class MemoryElementSelection {
    // constructors
    constructor();
    // methods
    SetSelection(node: UnityEditor.MemoryElement): any;
    ClearSelection(): any;
    isSelected(node: UnityEditor.MemoryElement): boolean;
    MoveUp(): any;
    MoveDown(): any;
    MoveFirst(): any;
    MoveLast(): any;
    MoveParent(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Selected: UnityEditor.MemoryElement;
    // fields
  }
}
