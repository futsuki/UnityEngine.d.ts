declare namespace UnityEditor {
  class GUILayoutInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    UpdateInstructions(): any;
    ShowOverlay(): any;
    DrawInstructionList(): any;
    DrawSelectedInstructionDetails(): any;
    Unselect(): any;
    SelectRow(index: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ListViewState: UnityEditor.ListViewState;
  }
}
