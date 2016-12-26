declare namespace UnityEditor {
  class ShapeEditorSelection {
    // constructors
    constructor(owner: UnityEditor.ShapeEditor);
    // methods
    Contains(i: number): boolean;
    DeleteSelection(): void;
    MoveSelection(delta: any): void;
    Clear(): void;
    SelectPoint(i: number, type: UnityEditor.ShapeEditor.SelectionType): void;
    RectSelect(rect: any, type: UnityEditor.ShapeEditor.SelectionType): void;
    OnGUI(): void;
    GetEnumerator(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    readonly isSelecting: boolean;
    readonly indices: any;
    // fields
  }
}
