declare namespace UnityEditor {
  class MemoryElementSelection extends System.Object {
    // constructors
    constructor();
    // methods
    SetSelection(node: UnityEditor.MemoryElement): void;
    ClearSelection(): void;
    isSelected(node: UnityEditor.MemoryElement): boolean;
    MoveUp(): void;
    MoveDown(): void;
    MoveFirst(): void;
    MoveLast(): void;
    MoveParent(): void;
    // properties
    readonly Selected: UnityEditor.MemoryElement;
    // fields
  }
}
