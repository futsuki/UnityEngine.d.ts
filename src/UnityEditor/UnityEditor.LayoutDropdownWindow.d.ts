declare namespace UnityEditor {
  class LayoutDropdownWindow {
    // constructors
    constructor(so: UnityEditor.SerializedObject);
    // methods
    OnOpen(): void;
    OnClose(): void;
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
