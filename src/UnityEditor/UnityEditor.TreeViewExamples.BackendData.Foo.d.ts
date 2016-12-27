declare namespace UnityEditor.TreeViewExamples.BackendData {
  class Foo extends System.Object {
    // constructors
    constructor(name: string, depth: number, id: number);
    // methods
    // properties
    name: string;
    id: number;
    depth: number;
    parent: UnityEditor.TreeViewExamples.BackendData.Foo;
    children: UnityEditor.TreeViewExamples.BackendData.Foo[];
    readonly hasChildren: boolean;
    // fields
  }
}
