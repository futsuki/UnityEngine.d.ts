declare namespace UnityEditor {
  class LookDevViewsWindow {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    OnOpen(): void;
    OnClose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly styles: UnityEditor.LookDevViewsWindow.Styles;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
