declare namespace UnityEditor {
  class ShapeEditorSelection extends System.Object {
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
    // properties
    readonly Count: number;
    readonly isSelecting: boolean;
    readonly indices: any;
    // fields
  }
}
