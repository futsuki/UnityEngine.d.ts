declare namespace UnityEditor {
  class BaseInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    DrawInstructionList(): void;
    UpdateInstructions(): void;
    DrawSelectedInstructionDetails(): void;
    Unselect(): void;
    SelectRow(index: number): void;
    ShowOverlay(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ListViewState: UnityEditor.ListViewState;
  }
}
