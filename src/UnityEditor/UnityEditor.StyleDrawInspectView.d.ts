declare namespace UnityEditor {
  class StyleDrawInspectView {
    // constructors
    constructor(guiViewDebuggerWindow: UnityEditor.GUIViewDebuggerWindow);
    // methods
    UpdateInstructions(): any;
    GetSelectedStyleProperty(serializedObject: any, styleProperty: any): any;
    Unselect(): any;
    ShowOverlay(): any;
    DrawInstructionList(): any;
    DrawSelectedInstructionDetails(): any;
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
