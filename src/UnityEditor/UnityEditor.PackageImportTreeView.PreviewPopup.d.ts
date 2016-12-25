declare namespace UnityEditor.PackageImportTreeView {
  class PreviewPopup {
    // constructors
    constructor(preview: any);
    // methods
    OnGUI(rect: any): any;
    GetWindowSize(): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
