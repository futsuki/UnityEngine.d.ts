declare namespace UnityEditor {
  class PopupWindowContentForNewLibrary {
    // constructors
    constructor(createLibraryCallback: any);
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
