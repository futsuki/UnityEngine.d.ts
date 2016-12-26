declare namespace UnityEditor {
  class GUILayoutInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    UpdateInstructions(): void;
    ShowOverlay(): void;
    DrawInstructionList(): void;
    DrawSelectedInstructionDetails(): void;
    Unselect(): void;
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
