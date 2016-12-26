declare namespace UnityEditor {
  class MemoryElementSelection {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Selected: UnityEditor.MemoryElement;
    // fields
  }
}
