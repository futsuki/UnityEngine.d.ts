declare namespace UnityEditor.TreeViewExamples.BackendData {
  class Foo {
    // constructors
    constructor(name: string, depth: number, id: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    name: string;
    id: number;
    depth: number;
    parent: UnityEditor.TreeViewExamples.BackendData.Foo;
    children: any;
    readonly hasChildren: boolean;
    // fields
  }
}
