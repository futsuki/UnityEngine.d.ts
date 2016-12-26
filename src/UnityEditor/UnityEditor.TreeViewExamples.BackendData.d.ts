declare namespace UnityEditor.TreeViewExamples {
  class BackendData {
    // constructors
    constructor();
    // methods
    GenerateData(maxNumItems: number): void;
    Find(id: number): UnityEditor.TreeViewExamples.BackendData.Foo;
    FindRecursive(id: number, parent: UnityEditor.TreeViewExamples.BackendData.Foo): UnityEditor.TreeViewExamples.BackendData.Foo;
    GetParentsBelow(id: number): any;
    ReparentSelection(parentItem: UnityEditor.TreeViewExamples.BackendData.Foo, insertionIndex: number, draggedItems: any): void;
    static FindItemRecursive(item: UnityEditor.TreeViewExamples.BackendData.Foo, id: number): UnityEditor.TreeViewExamples.BackendData.Foo;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly root: UnityEditor.TreeViewExamples.BackendData.Foo;
    readonly IDCounter: number;
    // fields
    m_RecursiveFindParentsBelow: boolean;
  }
}
