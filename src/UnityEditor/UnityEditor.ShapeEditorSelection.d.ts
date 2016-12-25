declare namespace UnityEditor {
  class ShapeEditorSelection {
    // constructors
    constructor(owner: UnityEditor.ShapeEditor);
    // methods
    Contains(i: number): boolean;
    DeleteSelection(): any;
    MoveSelection(delta: any): any;
    Clear(): any;
    SelectPoint(i: number, type: UnityEditor.ShapeEditor.SelectionType): any;
    RectSelect(rect: any, type: UnityEditor.ShapeEditor.SelectionType): any;
    OnGUI(): any;
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
