declare namespace UnityEditor.TreeViewExamples {
  class FooTreeViewItem extends UnityEditor.IMGUI.Controls.TreeViewItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string, foo: UnityEditor.TreeViewExamples.BackendData.Foo);
    // methods
    // properties
    readonly foo: UnityEditor.TreeViewExamples.BackendData.Foo;
    // fields
  }
}
