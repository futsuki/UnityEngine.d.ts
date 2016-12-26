declare namespace UnityEditorInternal.DopeSheetEditor {
  class DopeSheetSelectionRect {
    // constructors
    constructor(owner: UnityEditorInternal.DopeSheetEditor);
    // methods
    OnGUI(position: any): void;
    GetCurrentPixelRect(): any;
    GetCurrentTimeRect(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    createRect: any;
  }
}
