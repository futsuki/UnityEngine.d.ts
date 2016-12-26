declare namespace UnityEditorInternal.DopeSheetEditor {
  class DopeSheetControlPointRenderer {
    // constructors
    constructor();
    // methods
    FlushCache(): void;
    Clear(): void;
    Render(): void;
    AddUnselectedKey(element: UnityEditorInternal.DopeSheetEditor.DrawElement): void;
    AddSelectedKey(element: UnityEditorInternal.DopeSheetEditor.DrawElement): void;
    AddDragDropKey(element: UnityEditorInternal.DopeSheetEditor.DrawElement): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
