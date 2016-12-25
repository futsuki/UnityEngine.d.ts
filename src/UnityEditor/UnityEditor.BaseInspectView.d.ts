declare namespace UnityEditor {
  class BaseInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    DrawInstructionList(): any;
    UpdateInstructions(): any;
    DrawSelectedInstructionDetails(): any;
    Unselect(): any;
    SelectRow(index: number): any;
    ShowOverlay(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ListViewState: UnityEditor.ListViewState;
  }
}
