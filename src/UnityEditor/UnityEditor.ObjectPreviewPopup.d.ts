declare namespace UnityEditor {
  class ObjectPreviewPopup {
    // constructors
    constructor(previewObject: any);
    // methods
    OnClose(): any;
    OnGUI(rect: any): any;
    GetWindowSize(): any;
    OnOpen(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
