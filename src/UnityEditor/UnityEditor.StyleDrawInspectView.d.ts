declare namespace UnityEditor {
  class StyleDrawInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    UpdateInstructions(): void;
    GetSelectedStyleProperty(serializedObject: any, styleProperty: any): void;
    Unselect(): void;
    ShowOverlay(): void;
    DrawInstructionList(): void;
    DrawSelectedInstructionDetails(): void;
    SelectRow(index: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ListViewState: UnityEditor.ListViewState;
  }
}
