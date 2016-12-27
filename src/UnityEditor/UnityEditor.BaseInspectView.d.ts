declare namespace UnityEditor {
  class BaseInspectView extends System.Object {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    DrawInstructionList(): void;
    UpdateInstructions(): void;
    DrawSelectedInstructionDetails(): void;
    Unselect(): void;
    SelectRow(index: number): void;
    ShowOverlay(): void;
    // properties
    // fields
    m_ListViewState: UnityEditor.ListViewState;
  }
}
