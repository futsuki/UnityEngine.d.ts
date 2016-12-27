declare namespace UnityEditor.TagManagerInspector {
  class EnterNamePopup {
    // constructors
    constructor(tags: UnityEditor.SerializedProperty, cb: ((string) => void));
    // methods
    GetWindowSize(): any;
    OnGUI(windowRect: any): void;
    OnOpen(): void;
    OnClose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
