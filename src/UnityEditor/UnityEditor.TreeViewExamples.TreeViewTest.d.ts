declare namespace UnityEditor.TreeViewExamples {
  class TreeViewTest {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, lazy: boolean);
    // methods
    GetNumItemsInData(): number;
    GetNumItemsInTree(): number;
    Init(rect: any, backendData: UnityEditor.TreeViewExamples.BackendData): void;
    OnGUI(rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
