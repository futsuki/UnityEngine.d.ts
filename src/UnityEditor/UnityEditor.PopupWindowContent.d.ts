declare namespace UnityEditor {
  class PopupWindowContent {
    // constructors
    private constructor();
    // methods
    OnGUI(rect: any): void;
    GetWindowSize(): any;
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
