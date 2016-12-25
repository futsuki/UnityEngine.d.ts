declare namespace UnityEditor {
  class LayoutDropdownWindow {
    // constructors
    constructor(so: UnityEditor.SerializedObject);
    // methods
    OnOpen(): any;
    OnClose(): any;
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
