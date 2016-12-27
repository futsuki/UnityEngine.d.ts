declare namespace UnityEditor.TreeViewExamples {
  class TreeViewTest extends System.Object {
    // constructors
    constructor(editorWindow: UnityEditor.EditorWindow, lazy: boolean);
    // methods
    GetNumItemsInData(): number;
    GetNumItemsInTree(): number;
    Init(rect: any, backendData: UnityEditor.TreeViewExamples.BackendData): void;
    OnGUI(rect: any): void;
    // properties
    // fields
  }
}
