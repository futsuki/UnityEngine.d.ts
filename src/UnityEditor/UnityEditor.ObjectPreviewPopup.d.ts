declare namespace UnityEditor {
  class ObjectPreviewPopup {
    // constructors
    constructor(previewObject: any);
    // methods
    OnClose(): void;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    OnOpen(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
